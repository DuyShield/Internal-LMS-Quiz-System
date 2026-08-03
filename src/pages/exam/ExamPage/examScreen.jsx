import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import QuestionContent from './questionContent';
import QuestionNavigator from './questionNav';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getQuestionsByQuizId, getQuizById } from '../../../services/quizzesService';

export default function ExamScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Kiểm tra xem có đang ở chế độ Xem lại đáp án hay không
  const isReview = location.state?.isReview || false;
  const reviewUserAnswers = location.state?.userAnswers || null;
  const reviewQuestions = location.state?.questions || null;

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // Lưu đáp án người dùng chọn
  const [userAnswers, setUserAnswers] = useState(() => {
    if (isReview && reviewUserAnswers) return reviewUserAnswers;
    if (!id) return {};
    const savedAnswers = localStorage.getItem(`answers_${id}`);
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const STORAGE_KEY = `answers_${id}`;

  useEffect(() => {
    const fetchLesson = async () => {
      if (!id || id === 'undefined') return;

      try {
        setLoading(true);
        // Nếu đã có questions từ location.state 
        if (isReview && reviewQuestions) {
          setQuestions(reviewQuestions);
        } else {
          const data = await getQuestionsByQuizId(id);
          setQuestions(data);
        }
        const quizData = await getQuizById(id);
        setQuizzes(quizData);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu câu hỏi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id, isReview, reviewQuestions]);

  // Reset state khi id hoặc chế độ review thay đổi
  useEffect(() => {
    if (id) {
      if (isReview && reviewUserAnswers) {
        setUserAnswers(reviewUserAnswers);
      } else {
        const savedAnswers = localStorage.getItem(`answers_${id}`);
        setUserAnswers(savedAnswers ? JSON.parse(savedAnswers) : {});
      }
      setCurrentIndex(0);
    }
  }, [id, isReview, reviewUserAnswers]);

  // Lưu vào localStorage
  useEffect(() => {
    if (!isReview && id && Object.keys(userAnswers).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
    }
  }, [userAnswers, id, STORAGE_KEY, isReview]);

  if (loading) {
    return <div className="p-5 text-center">Đang tải data...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="p-5 text-center">Không tìm thấy data bài kiểm tra!</div>;
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];

  const formattedOptions = currentQuestion?.options?.map((text, idx) => ({
    id: LABELS[idx],
    text: text
  })) || [];

  const correctOptionLetter = currentQuestion?.correctAnswer !== undefined
    ? LABELS[currentQuestion.correctAnswer]
    : null;

  // Xử lý khi chọn đáp án
  const handleSelectOption = (optionId) => {
    if (isReview) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Xử lý nộp bài
  const handleSubmit = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const isFull = answeredCount === totalQuestions;

    const confirmMessage = isFull
      ? "Bạn có chắc chắn muốn nộp bài?"
      : `Bạn còn ${totalQuestions - answeredCount} câu chưa làm. Bạn vẫn muốn nộp bài chứ?`;

    if (!window.confirm(confirmMessage)) return;

    // Tính số câu đúng
    const correctCount = questions.filter((q, i) => userAnswers[i] === LABELS[q.correctAnswer]).length;
    const score = Number(((correctCount / totalQuestions) * 10).toFixed(1));

    // Xóa bộ nhớ tạm local
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`endTime_${id}`);

    // Truyền sang ResultPage
    navigate(`/result/${id}`, {
      state: {
        score,
        correctCount,
        totalCount: totalQuestions,
        quizTitle: quizzes.title || 'Bài kiểm tra',
        timeTaken: quizzes.timeLimit || '00:00',
        userAnswers, 
        questions  
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col gap-5">
      <Header
        quizId={id}
        title={quizzes.title}
        type={quizzes.category}
        difficulty={quizzes.difficulty}
        time={quizzes.timeLimit}
        isExam={!isReview}
      />

      <div className="flex flex-col lg:flex-row gap-5 px-8 py-5">
        <QuestionContent
          title={quizzes.title || `Bài kiểm tra #${id}`}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
          questionText={currentQuestion?.question || ""}
          options={formattedOptions}
          selectedOption={userAnswers[currentIndex]}
          correctOptionId={correctOptionLetter} 
          isReview={isReview}                  
          onSelectOption={handleSelectOption}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <QuestionNavigator
          total={totalQuestions}
          currentIndex={currentIndex}
          userAnswers={userAnswers}
          onSelectQuestion={(index) => setCurrentIndex(index)}
          onSubmit={handleSubmit}
          isReview={isReview}
        />
      </div>
    </div>
  );
}
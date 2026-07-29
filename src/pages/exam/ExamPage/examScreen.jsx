import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import QuestionContent from './questionContent';
import QuestionNavigator from './questionNav';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionsByQuizId, getQuizById } from '../../../services/quizzesService';

export default function ExamScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  // Lưu trực tiếp danh sách câu hỏi 
  const [questions, setQuestions] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  // Lưu đáp án người dùng chọn
  const [userAnswers, setUserAnswers] = useState({});
  // Quản lý câu hỏi hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchLesson = async () => {
      if (!id || id === 'undefined') return;

      try {
        setLoading(true);
        const data = await getQuestionsByQuizId(id);
        const quizData = await getQuizById(id);
        setQuestions(data);
        setQuizzes(quizData);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu câu hỏi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]);

  if (loading) {
    return <div className="p-5 text-center">Đang tải data...</div>;
  }

  // Kiểm tra mảng questions trực tiếp
  if (!questions || questions.length === 0) {
    console.log("ID hiện tại:", id);
    return <div className="p-5 text-center">Không tìm thấy data bài kiểm tra!</div>;
  }

  // Lấy dữ liệu câu hỏi hiện tại
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];

  const formattedOptions = currentQuestion?.options?.map((text, idx) => ({
    id: LABELS[idx],
    text: text
  })) || [];

  // Xử lý khi chọn đáp án
  const handleSelectOption = (optionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId,
    }));
  };

  // Xử lý chuyển câu hỏi
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

    const message = isFull
      ? "Bạn có chắc chắn muốn nộp bài?"
      : `Bạn còn ${totalQuestions - answeredCount} câu chưa làm. Bạn vẫn muốn nộp bài chứ?`;
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col gap-5">
      <Header 
      quizId={id}
      title={quizzes.title}
      type={quizzes.category}
      difficulty={quizzes.difficulty}
      time={quizzes.timeLimit}
      isExam={true}/>
      <div className="flex flex-col lg:flex-row gap-5 px-8 py-5">
        <QuestionContent
          title={`Bài kiểm tra #${id}`}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
          questionText={currentQuestion?.question || ""}
          options={formattedOptions}
          selectedOption={userAnswers[currentIndex]}
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
        />
      </div>
    </div>
  );
}
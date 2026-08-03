import React, { useEffect, useState } from 'react'
import Header from '../component/header';
import ResultCard from './resultCard';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getQuizById } from '../../../services/quizzesService';
export default function ResultPage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [quizzes, setQuizzes] = useState([]);
    const resultData = location.state || {
        score: 0,
        correctCount: 0,
        totalCount: 0,
        quizTitle: 'Bài kiểm tra',
        timeTaken: '00:00'
    };
    useEffect(() => {
        const fetchLesson = async () => {
            if (!id || id === 'undefined') return;
            try {
                const quizData = await getQuizById(id);
                setQuizzes(quizData);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu câu hỏi:", error);
            }
        };
        fetchLesson();
    }, [id]);
    const handleRestartQuiz = () => {
        navigate(`/quiz/${id}`);
    };
    const handleViewAnswer = () => {
        navigate(`/quiz/${id}`, {
            state: {
                isReview: true,
                userAnswers: resultData.userAnswers
            }
        });
    };
    return (
        <div className='flex bg-blue-50 flex-col gap-5 min-h-screen'>
            <Header
                quizId={id}
                title={quizzes.title}
                type={quizzes.category}
                difficulty={quizzes.difficulty}></Header>
            <div className='px-4 mt-6 mb-6 flex flex-col bg-blue-50'>
                <ResultCard quizId={id} {...resultData}
                    onRestart={handleRestartQuiz}
                    onViewAnswer={handleViewAnswer}></ResultCard>
            </div>
        </div>
    )
}

import React from 'react'
import Header from '../component/header';
import ResultCard from './resultCard';
import { useParams, useLocation } from 'react-router-dom';
export default function ResultPage() {
    const { id } = useParams();
    const location = useLocation();
    const resultData = location.state || {
        score: 0,
        correctCount: 0,
        totalCount: 0,
        quizTitle: 'Bài kiểm tra',
        timeTaken: '00:00'
    };
    return (
        <div className='flex bg-blue-50 flex-col gap-5 min-h-screen'>
            <Header></Header>
            <div className='px-4 mt-6 mb-6 flex flex-col bg-blue-50'>
                <ResultCard quizId={id} {...resultData}></ResultCard>
            </div>
        </div>
    )
}

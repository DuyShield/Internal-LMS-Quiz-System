import React from 'react'
import Header from '../component/header';
import ResultCard from './resultCard';
export default function resultPage() {
    return (
        <div className='flex bg-blue-50 flex-col gap-5 h-screen'>
            <Header></Header>
            <div className='px-4 mt-6 mb-6 flex flex-col bg-blue-50'>
                <ResultCard></ResultCard>
            </div>
        </div>
    )
}

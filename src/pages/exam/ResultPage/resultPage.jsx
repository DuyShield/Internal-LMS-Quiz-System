import React from 'react'
import Header from '../component/header';
import ResultCard from './resultCard';
export default function resultPage() {
    return (
        <div className='flex bg-blue-50 flex-col gap-5'>
            <Header></Header>
            <div className='mt-6 mb-6 flex flex-col '>
                <ResultCard></ResultCard>
            </div>
        </div>
    )
}

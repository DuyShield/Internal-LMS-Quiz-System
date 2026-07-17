import React from 'react'
import Header from '../component/header';
import QuestionContent from './questionContent';
import QuestionNavigator from './questionNav';
export default function examScreen() {
  return (
    <div className="bg-blue-50 flex flex-col gap-5">
        <Header></Header>
        <div className='flex gap-5 px-8 py-5'>
            <QuestionContent></QuestionContent>
            <QuestionNavigator></QuestionNavigator>      
        </div>
    </div>
  )
}

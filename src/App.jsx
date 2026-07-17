import React from 'react'; 
import LoginPage from './pages/loginPage';
import ListLessons from './pages/lesson/ListLesson/listLessons';
import ListQuizzes from './pages/exam/ListQuizzes/listQuizzes';
import MainScreen from './pages/home/mainSrceen';
import DetailLesson from './pages/lesson/DetailLesson/detailLesson';
import Profile from './pages/userProfile/profileUser';
import DetailQuiz from './pages/exam/ExamPage/examScreen';
import ResultPage from './pages/exam/ResultPage/resultPage';
export default function App() {
  return (
    <div>
        {/* <ListLessons /> */}
        {/* <MainScreen /> */}
        {/* <DetailLesson /> */}
        {/* <Profile /> */}
        {/* <ListQuizzes /> */}
        {/* <DetailQuiz></DetailQuiz> */}
        <ResultPage></ResultPage>
    </div>
  );
}
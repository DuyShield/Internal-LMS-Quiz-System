import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import tất cả các trang của bạn
import LoginPage from './pages/loginPage';
import MainScreen from './pages/home/mainSrceen';
import ListLessons from './pages/lesson/ListLesson/listLessons';
import DetailLesson from './pages/lesson/DetailLesson/detailLesson';
import ListQuizzes from './pages/exam/ListQuizzes/listQuizzes';
import DetailQuiz from './pages/exam/ExamPage/examScreen';
import ResultPage from './pages/exam/ResultPage/resultPage';
import Profile from './pages/userProfile/profileUser';
import HistoryPage from './pages/history/historyPage';

// Import cơ sở hợp ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang Đăng nhập */}
        <Route path="/login" element={<LoginPage />} />

        {/* Trang chủ Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons"
          element={<ProtectedRoute><ListLessons /></ProtectedRoute>}/>
        <Route
          path="/lessons/:id"
          element={<ProtectedRoute><DetailLesson /></ProtectedRoute>}/>
        <Route
          path="/quizzes"
          element={<ProtectedRoute><ListQuizzes /></ProtectedRoute>}/>
        <Route
          path="/quiz/:id"
          element={<ProtectedRoute><DetailQuiz /></ProtectedRoute>}/>
        <Route
          path="/result"
          element={<ProtectedRoute><ResultPage /></ProtectedRoute>}/>
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route
          path="/history"
          element={<ProtectedRoute><HistoryPage /></ProtectedRoute>}/>

        {/* Mặc định chưa nhập đường dẫn gì sẽ nhảy tới /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
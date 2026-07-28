import React, { useState, useEffect } from 'react';
import Topbar from '../../../compoments/common/topBar';
import Sidebar from '../../../compoments/common/sideBar';
import FilterBar from '../../../compoments/common/filterBar';
import CardQuiz from './quizCard';
import { getQuizzes } from '../../../services/quizzesService';
export default function ListQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', status: 'all', topic: 'all' });
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);

        const data = await getQuizzes();

        setQuizzes(data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu khóa học:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);
  // Lọc dữ liệu ngắn gọn
    const filteredQuizzes = quizzes.filter((item) => {
    const matchSearch = item.title?.toLowerCase().includes(filters.search.toLowerCase());
    const matchStatus = filters.status === 'all' || (filters.status === 'done' ? item.isCompleted : !item.isCompleted);
    const matchTopic = filters.topic === 'all' || item.category?.toLowerCase() === filters.topic.toLowerCase();

    return matchSearch && matchStatus && matchTopic;
  });
  if (loading) {
    return <div className="text-center mt-10">Đang tải dữ liệu...</div>;
  }
  return (
    <div className="flex w-full h-screen overflow-hidden bg-slate-50 text-gray-800 font-sans antialiased">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar />
        <main className="flex-1 p-4 overflow-y-auto">
          {/* Phần Filter */}
          <div className="mb-4">
            <FilterBar
              checkedPage="quizzes"
              totalItems={filteredQuizzes.length}
              onFilterChange={setFilters} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main information */}
            {filteredQuizzes.length > 0 ? (filteredQuizzes.map((lesson) => (
              <CardQuiz
                id={lesson.id}
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                category={lesson.category}
                difficulty={lesson.difficulty}
                progress={lesson.progress}
                isCompleted={lesson.isCompleted}
              />
            ))) :
              <div className="col-span-full text-center py-10 text-gray-400">
                Không tìm thấy bài kiểm tra nào phù hợp.
              </div>}
          </div>
        </main>
      </div>
    </div>
  );
}
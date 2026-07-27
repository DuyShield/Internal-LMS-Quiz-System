import React, { useState, useEffect } from 'react';
import Topbar from '../../../compoments/common/topBar';
import Sidebar from '../../../compoments/common/sideBar';
import FilterBar from '../../../compoments/common/filterBar';
import CardLesson from './lessonsCard';
import { getLessons } from '../../../services/lessonsService';
function App() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', status: 'all', topic: 'all' });

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true);

        const data = await getLessons();

        setLessons(data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu khóa học:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchLessons();
  }, []);

  // Lọc dữ liệu ngắn gọn
  const filteredLessons = lessons.filter((item) => {
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
              checkedPage="lessons"
              totalItems={filteredLessons.length}
              onFilterChange={setFilters}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main information */}
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <CardLesson
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  category={lesson.category}
                  difficulty={lesson.difficulty}
                  progress={lesson.progress}
                  isCompleted={lesson.isCompleted}
                />
              )
              )
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">
                Không tìm thấy bài học nào phù hợp.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Topbar from '../compoments/common/topBar';
import Sidebar from '../compoments/common/sideBar';
import FilterBar from '../compoments/common/filterBar';
import CardLesson from '../compoments/card/lessonsDisplay';
import { getLessons } from '../services/lessonsService';
function App() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons= async () => {
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
          <FilterBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main information */}
          {lessons.map((lesson) => (
            <CardLesson
              key={lesson.id}
              title={lesson.title}
              description={lesson.description}
              category={lesson.category}
              difficulty={lesson.difficulty}
              progress={lesson.progress}
              isCompleted={lesson.isCompleted}
            />
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;
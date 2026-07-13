import React from 'react';
import Topbar from '../compoments/common/topBar';
import Sidebar from '../compoments/common/sideBar';
import FilterBar from '../compoments/common/filterBar';

function App() {
  return (
    <div className="flex w-full min-h-screen bg-slate-50 text-gray-800 font-sans antialiased">
      {/* Thanh Sidebar cố định bên trái */}
      <Sidebar />
      
      {/*Vùng hiển thị nội dung chính bên phải */}
      <main className="flex-1 p-4 overflow-y-auto">
        {/* Phần Header của trang */}
        <div className="mb-4">
            <Topbar />
        </div>
        {/* Phần Filter */}
        <div className="mb-4">
            <FilterBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
          {/* Phần hiển thị nội dung mẫu */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-2">
            <h3 className="font-semibold text-lg mb-4">Tiến độ học tập</h3>
            <div className="h-48 bg-slate-50 rounded-xl flex items-center justify-center text-gray-400">
              [Biểu đồ hoặc Nội dung tiến độ sẽ code ở đây]
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Bài kiểm tra sắp tới</h3>
            <p className="text-sm text-gray-500">Bạn không có bài kiểm tra nào trong hôm nay.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

const QuizFilter = ({ onFilterChange }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all'); 
  const [topic, setTopic] = useState('all');   

  // Gửi bộ lộc mới lên cha
  const handleUpdateFilter = (updatedFields) => {
    // Gộp giá trị mới thay đổi với các giá trị cũ
    const currentFilters = {
      search: searchTerm,
      status: status,
      topic: topic,
      ...updatedFields
    };
    if (onFilterChange) onFilterChange(currentFilters);
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
      
      {/* Search và Bộ lọc Trạng thái */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        {/* Search input */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Tìm kiếm bài quiz..."
            className="w-full max-w-2xl px-4 py-2.5 rounded-xl border border-gray-200 bg-[#f8fafc] text-sm focus:outline-none focus:border-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleUpdateFilter({ search: e.target.value });
            }}
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 text-sm shrink-0">
          <span className="text-gray-400">Trạng thái</span>
          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
            <button 
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${status === 'all' ? 'bg-[#0f2d59] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => { setStatus('all'); handleUpdateFilter({ status: 'all' }); }}
            >Tất cả</button>
            <button 
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${status === 'done' ? 'bg-[#0f2d59] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => { setStatus('done'); handleUpdateFilter({ status: 'done' }); }}
            >Đã làm</button>
            <button 
              className={`px-4 py-1.5 rounded-lg font-medium transition-all ${status === 'not-done' ? 'bg-[#0f2d59] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => { setStatus('not-done'); handleUpdateFilter({ status: 'not-done' }); }}
            >Chưa làm</button>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 mr-2">Chủ đề</span>
          
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'devops', label: 'DevOps' },
            { id: 'softskills', label: 'Soft Skills' }
          ].map((item) => (
            <button
              key={item.id}
              className={`px-4 py-1.5 rounded-xl border font-medium transition-all ${
                topic === item.id 
                  ? 'bg-[#e6f4ff] text-[#1890ff] border-[#1890ff]' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => { setTopic(item.id); handleUpdateFilter({ topic: item.id }); }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Số lượng bài hiển thị bên góc phải */}
        <span className="text-gray-400 font-medium shrink-0">12 bài</span>
      </div>

    </div>
  );
};

export default QuizFilter;
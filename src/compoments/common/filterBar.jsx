import React, { useState } from 'react';

const QuizFilter = ({ onFilterChange, totalItems = 0, topicsList, checkedPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [topic, setTopic] = useState('all');

  const defaultTopics = [
    { id: 'all', label: 'Tất cả' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
    { id: 'softskills', label: 'Soft Skills' }
  ];

  const topics = topicsList || defaultTopics;

  const statusOptions = checkedPage === "quizzes"
    ? [
        { id: 'all', label: 'Tất cả' },
        { id: 'done', label: 'Đã làm' },
        { id: 'not-done', label: 'Chưa làm' }
      ]
    : [
        { id: 'all', label: 'Tất cả' },
        { id: 'done', label: 'Đã học' },
        { id: 'not-done', label: 'Chưa học' }
      ];

  // Gửi bộ lọc mới lên component cha
  const handleUpdateFilter = (updatedFields) => {
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
            placeholder={checkedPage === "quizzes" ? "Tìm kiếm bài quiz..." : "Tìm kiếm bài học..."}
            className="w-full max-w-2xl px-4 py-2.5 rounded-xl border border-gray-200 bg-[#f8fafc] text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
            value={searchTerm}
            onChange={(e) => {
              const value = e.target.value;
              setSearchTerm(value);
              handleUpdateFilter({ search: value });
            }}
          />
        </div>

        {/* Filter Trạng thái */}
        <div className="flex items-center gap-2 text-sm shrink-0">
          <span className="text-gray-400 font-medium">Trạng thái</span>
          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
            {statusOptions.map((item) => (
              <button
                key={item.id}
                className={`px-4 py-1.5 rounded-lg font-medium text-xs sm:text-sm ${
                  status === item.id
                    ? 'bg-[#0f2d59] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setStatus(item.id);
                  handleUpdateFilter({ status: item.id });
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Chủ đề & Số lượng bài */}
      <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-4 gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 font-medium mr-2">Chủ đề</span>

          {topics.map((item) => (
            <button
              key={item.id}
              className={`px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-medium ${
                topic === item.id
                  ? 'bg-[#e6f4ff] text-[#1890ff] border-[#1890ff]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => {
                setTopic(item.id);
                handleUpdateFilter({ topic: item.id });
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <span className="text-gray-400 font-medium shrink-0 ml-auto sm:ml-0">
          {totalItems} {checkedPage === "quizzes" ? "Đề" : "Bài"}
        </span>

      </div>

    </div>
  );
};

export default QuizFilter;
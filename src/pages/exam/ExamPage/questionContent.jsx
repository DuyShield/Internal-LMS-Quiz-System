import React from 'react';

export default function QuestionBox({
  title="React State & Hooks",
  questionNumber = 5,
  totalQuestions = 20,
  questionText = "Hook nào dùng để xử lý side-effect trong Functional Component?",
  options = [
    { id: 'A', text: 'useState' },
    { id: 'B', text: 'useEffect' },
    { id: 'C', text: 'useContext' },
    { id: 'D', text: 'useReducer' }
  ],
  selectedOption = null, 
  onSelectOption,        
  onPrev,               
  onNext                
}) {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col min-h-[500px]">
      <div className="p-8 flex-1">
        {/* Thong tin bài thi */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs text-slate-400 block mb-1">{title}</span>
            <h2 className="text-xl font-bold text-slate-800">Câu {questionNumber} / {totalQuestions}</h2>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Tiến độ:</span>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#3A76F5] transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-slate-600">{questionNumber}/{totalQuestions} câu</span>
          </div>
        </div>

        {/* Tag số câu nhỏ */}
        <span className="inline-block bg-blue-50 text-[#3A76F5] text-xs font-semibold px-3 py-1 rounded-lg mb-4">
          Câu hỏi {questionNumber}
        </span>

        {/* Nội dung câu hỏi */}
        <h3 className="text-lg font-bold text-slate-800 leading-snug mb-8">
          {questionText}
        </h3>

        {/* DANH SÁCH ĐÁP ÁN A, B, C, D */}
        <div className="space-y-3.5">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onSelectOption && onSelectOption(option.id)}
                className={`
                  w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-150
                  ${
                    isSelected
                      ? "border-2 border-[#3A76F5] bg-blue-50/20"
                      : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                  }
                `}
              >
                {/* Khung chứa chữ A, B, C, D */}
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors
                  ${
                    isSelected
                      ? "bg-[#3A76F5] text-white"
                      : "bg-blue-50 text-[#3A76F5]"
                  }
                `}>
                  {option.id}
                </div>
                
                {/* Chữ của đáp án */}
                <span className={`text-sm font-medium ${isSelected ? "text-slate-900 font-semibold" : "text-slate-600"}`}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* 2. PHẦN DƯỚI: ĐƯỜNG KẺ VÀ NÚT ĐIỀU HƯỚNG (PREV / NEXT) */}
      <div className="border-t border-slate-100 p-6 bg-white flex justify-between items-center">
        
        {/* Nút câu trước */}
        <button 
          onClick={onPrev}
          disabled={questionNumber === 1}
          className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Câu trước</span>
        </button>

        {/* Dấu chấm chuyển câu ở giữa (Giống ảnh gốc) */}
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span 
              key={i} 
              className={`h-2 rounded-full transition-all duration-200 ${i === 4 ? "w-4 bg-[#3A76F5]" : "w-2 bg-slate-200"}`}
            ></span>
          ))}
        </div>

        {/* Nút câu tiếp theo */}
        <button 
          onClick={onNext}
          disabled={questionNumber === totalQuestions}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#3A76F5] text-[#3A76F5] font-semibold text-sm rounded-xl hover:bg-blue-50/50 disabled:opacity-40 transition-colors"
        >
          <span>Câu tiếp theo</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

    </div>
  );
}
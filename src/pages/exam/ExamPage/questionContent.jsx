import React from 'react';
import { ArrowIcon } from "../../../compoments/icon";
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
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col min-h-[500px] ">
      <div className="p-5 md:p-8 flex-1">
        {/* Thong tin bài thi */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 block mb-1">{title}</span>
            <h2 className="text-xl font-bold text-slate-800">Câu {questionNumber} / {totalQuestions}</h2>
          </div>
          
          {/* Progress bar - THÊM w-full VÀ whitespace-nowrap ĐỂ CHỐNG LỆCH */}
          <div className="flex items-center gap-3 w-full sm:w-auto bg-slate-50 sm:bg-transparent p-2 rounded-xl sm:p-0">
            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Tiến độ:</span>
            <div className="flex-1 sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#3A76F5] transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{questionNumber}/{totalQuestions} câu</span>
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
                {/* Khung chứa chữ A, B, C, D - THÊM shrink-0 ĐỂ TRÁNH MÉO Ô TRÒN */}
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                  ${
                    isSelected
                      ? "bg-[#3A76F5] text-white"
                      : "bg-blue-50 text-[#3A76F5]"
                  }`}>
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

      <div className="border-t border-slate-100 p-4 md:p-6 bg-white flex justify-between items-center gap-2">        
        {/* Nút câu trước */}
        <button 
          onClick={onPrev}
          disabled={questionNumber === 1}
          className="flex items-center justify-center gap-1 md:gap-2 px-2.5 md:px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 flex-1 sm:flex-initial"
        >
          <ArrowIcon className="rotate-180 w-4 h-4 shrink-0"></ArrowIcon>
          <span className="whitespace-nowrap text-xs md:text-sm">Câu trước</span>
        </button>

        {/* Dấu chấm chuyển câu ở giữa */}
        <div className="hidden md:flex xs:flex gap-1.5 shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <span 
              key={i} 
              className={`h-2 rounded-full transition-all duration-200 ${i === 4 ? "w-4 bg-[#3A76F5]" : "w-2 bg-slate-200"}`}
            ></span>
          ))}
        </div>

        {/* Nút câu tiếp theo*/}
        <button 
          onClick={onNext}
          disabled={questionNumber === totalQuestions}
          className="flex items-center justify-center gap-1 md:gap-2 px-2.5 md:px-5 py-2.5 bg-white border border-[#3A76F5] text-[#3A76F5] font-semibold text-sm rounded-xl hover:bg-blue-50/50 flex-1 sm:flex-initial">
          <span className="whitespace-nowrap text-xs md:text-sm">Câu tiếp</span>
          <ArrowIcon className="w-4 h-4 shrink-0"></ArrowIcon>
        </button>

      </div>

    </div>
  );
}
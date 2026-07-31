import React from 'react';
import { ArrowIcon } from "../../../compoments/icon";

export default function QuestionBox({
  title = "React State & Hooks",
  questionNumber = 5,
  totalQuestions = 20,
  currentIndex = 1,
  questionText = "Hook nào dùng để xử lý side-effect trong Functional Component?",
  options = [
    { id: 'A', text: 'useState' },
    { id: 'B', text: 'useEffect' },
    { id: 'C', text: 'useContext' },
    { id: 'D', text: 'useReducer' }
  ],
  selectedOption = null,
  correctOptionId = null, 
  isReview = false,      
  onSelectOption,
  onPrev,
  onNext
}) {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col min-h-[500px]">
      <div className="p-5 md:p-8 flex-1">
        {/* Thông tin bài thi */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 block mb-1">{title}</span>
            <h2 className="text-xl font-bold text-slate-800">Câu {questionNumber} / {totalQuestions}</h2>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto bg-slate-50 p-2 rounded-xl sm:p-0">
            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Tiến độ:</span>
            <div className="flex-1 sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3A76F5]"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{questionNumber}/{totalQuestions} câu</span>
          </div>
        </div>

        {/* Tag số câu nhỏ & Trạng thái kết quả nếu ở chế độ Review */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-blue-50 text-[#3A76F5] text-xs font-semibold px-3 py-1 rounded-lg">
            Câu hỏi {questionNumber}
          </span>
          {isReview && (
            selectedOption === correctOptionId ? (
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-lg">
                Đúng
              </span>
            ) : (
              <span className="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-lg">
                Sai
              </span>
            )
          )}
        </div>

        {/* Nội dung câu hỏi */}
        <h3 className="text-lg font-bold text-slate-800 leading-snug mb-8">
          {questionText}
        </h3>

        {/* Danh sách đáp án A, B, C, D */}
        <div className="space-y-3.5">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.id === correctOptionId;

            let containerStyle = "border-slate-100 hover:border-slate-200 hover:bg-slate-100";
            let badgeStyle = "bg-blue-50 text-[#3A76F5]";
            let textStyle = "text-slate-600";

            if (isReview) {
              if (isCorrect) {
                // Đáp án Đúng -> Màu Xanh Lá
                containerStyle = "border-2 border-emerald-500 bg-emerald-50";
                badgeStyle = "bg-emerald-500 text-white";
                textStyle = "text-emerald-900 font-semibold";
              } else if (isSelected && !isCorrect) {
                // Đáp án Sai -> Màu Đỏ
                containerStyle = "border-2 border-rose-500 bg-rose-50";
                badgeStyle = "bg-rose-500 text-white";
                textStyle = "text-rose-900 font-semibold";
              } else {
                containerStyle = "border-slate-100 opacity-60";
              }
            } else if (isSelected) {
              // Chế độ làm bài bình thường khi người dùng chọn
              containerStyle = "border-2 border-[#3A76F5] bg-blue-100";
              badgeStyle = "bg-[#3A76F5] text-white";
              textStyle = "text-slate-900 font-semibold";
            }

            return (
              <button
                key={option.id}
                disabled={isReview}
                onClick={() => onSelectOption && onSelectOption(option.id)}
                className={`
                  w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all
                  ${containerStyle}
                `}>
                {/* Khung chứa chữ A, B, C, D */}
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                  ${badgeStyle}`}>
                  {option.id}
                </div>
                {/* Nội dung đáp án */}
                <span className={`text-sm font-medium ${textStyle}`}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Thanh điều hướng câu hỏi bên dưới */}
      <div className="border-t border-slate-100 p-4 md:p-6 bg-white flex justify-between items-center gap-2">
        {/* Nút câu trước */}
        <button
          onClick={onPrev}
          disabled={questionNumber === 1}
          className="flex items-center justify-center gap-2 px-2.5 md:px-5 py-2.5 bg-white border border-[#3A76F5] text-[#3A76F5] font-semibold text-sm rounded-xl hover:bg-blue-100 disabled:text-slate-400 disabled:hover:bg-white"
        >
          <ArrowIcon className="w-4 h-4 shrink-0 rotate-180" />
          <span className="whitespace-nowrap text-xs md:text-sm">Câu trước</span>
        </button>

        <div className="hidden md:flex xs:flex gap-1.5 shrink-0">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-4 bg-[#3A76F5]" : "w-2 bg-slate-200"
                }`}
            ></span>
          ))}
        </div>

        {/* Nút câu tiếp theo */}
        <button
          onClick={onNext}
          disabled={questionNumber === totalQuestions}
          className="flex items-center justify-center gap-2 px-2.5 md:px-5 py-2.5 bg-white border border-[#3A76F5] text-[#3A76F5] font-semibold text-sm rounded-xl hover:bg-blue-100  disabled:text-slate-400 disabled:hover:bg-white">
          <span className="whitespace-nowrap text-xs md:text-sm">Câu tiếp</span>
          <ArrowIcon className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
}
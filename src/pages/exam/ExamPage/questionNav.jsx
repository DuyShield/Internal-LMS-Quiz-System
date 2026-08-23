import React from 'react';

export default function QuestionNavigator({
    total = 20,
    currentIndex = 0,
    userAnswers = {},
    onSelectQuestion,
    onSubmit,
    isReview = false
}) {
    // Đếm số câu đã làm
    const answeredCount = Object.keys(userAnswers).length;
    const unansweredCount = total - answeredCount;

    return (
        <div className="w-full lg:max-w-[360px] bg-white p-6 rounded-2xl border border-gray-100 shadow-md h-fit">
            {/* Tiêu đề & Chú thích */}
            <div className="mb-4">
                <h3 className="font-bold text-slate-800 text-base mb-3">Bảng câu hỏi</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-blue-600 rounded"></span>
                        <span>Đã làm</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 border-2 border-[#3A76F5] rounded bg-white"></span>
                        <span>Đang xem</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-slate-100 rounded"></span>
                        <span>Chưa làm</span>
                    </div>
                </div>
            </div>

            {/* Danh sách nút bấm số câu */}
            <div className="grid grid-cols-5 gap-2.5">
                {Array.from({ length: total }).map((_, index) => {
                    const isCurrent = currentIndex === index;
                    const isAnswered = userAnswers[index] !== undefined;

                    // Xác định kiểu hiển thị cho nút
                    let buttonStyle = "bg-slate-50 text-slate-400 border-transparent hover:bg-slate-100";

                    if (isCurrent && isAnswered) {
                        // Đang xem + Đã chọn đáp án
                        buttonStyle = "bg-blue-600 text-white border-4 border-blue-200 font-bold";
                    } else if (isCurrent) {
                        // Đang xem + Chưa chọn đáp án
                        buttonStyle = "border-2 border-[#3A76F5] text-[#3A76F5] bg-white font-bold shadow-sm";
                    } else if (isAnswered) {
                        // Đã chọn đáp án
                        buttonStyle = "bg-blue-600 text-white border-transparent";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onSelectQuestion && onSelectQuestion(index)}
                            className={`h-10 text-sm font-semibold rounded-xl border transition-all duration-150 ${buttonStyle}`}>
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            {/* Thống kê */}
            <div className="mt-5 flex justify-between items-center text-xs text-slate-400 font-medium px-1">
                <span>{answeredCount} câu đã làm</span>
                <span>{unansweredCount} câu chưa làm</span>
            </div>

            {/* Button submit */}
            <button
                onClick={onSubmit}
                className="mt-6 w-full bg-[#10B981] hover:bg-[#059669] text-white py-3.5 px-4 rounded-2xl font-bold transition-colors shadow-sm">
                {isReview ? "Trở lại" : "Nộp bài"}
            </button>

        </div>
    );
}
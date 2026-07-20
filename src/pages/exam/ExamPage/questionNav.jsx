export default function QuestionNavigator({
    total = 20,
    currentQuestion = 4, 
    answers = {},
    onChange,
    onSubmit
}) {
    // Đếm số câu đã làm
    const answeredCount = Object.keys(answers).length;
    const unansweredCount = total - answeredCount;

    return (
        <div className="w-full lg:max-w-[360px] bg-white p-6 rounded-2xl border border-gray-100 shadow-md">
            <div className="mb-4">
                <h3 className="font-bold text-slate-800 text-base mb-3">Bảng câu hỏi</h3>
                {/* Chú thích */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-blue-600 rounded"></span>
                        <span>Đã làm</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 border-2 border-[#3A76F5] rounded"></span>
                        <span>Đang xem</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-slate-100 rounded"></span>
                        <span>Chưa làm</span>
                    </div>
                </div>
            </div>

            {/* Lưới câu hỏi */}
            <div className="grid grid-cols-5 gap-2.5">
                {Array.from({ length: total }).map((_, index) => {
                    const isCurrent = currentQuestion === index;
                    const isAnswered = !!answers[index];
                    return (
                        <button
                            key={index}
                            onClick={() => onChange && onChange(index)}
                            className={`
                                h-10 text-sm font-semibold rounded-xl border transition-all duration-150
                                ${isCurrent
                                    ? "border-2 border-[#3A76F5] text-[#3A76F5] bg-white shadow-sm"
                                    : isAnswered
                                    ? "bg-blue-600 text-white border-transparent"
                                    : "bg-slate-50 text-slate-400 border-transparent hover:bg-slate-100"
                                }`}>
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            {/* Tổng câu đã làm, chưa làm */}
            <div className="mt-5 flex justify-between items-center text-xs text-slate-400 font-medium px-1">
                <span>{answeredCount} câu đã làm</span>
                <span>{unansweredCount} câu chưa làm</span>
            </div>

            {/* Sumit button */}
            <button
                onClick={onSubmit}
                className="mt-6 w-full bg-[#10B981] hover:bg-[#059669] text-white py-3.5 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm">
                <span>NỘP BÀI</span>
            </button>

        </div>
    );
}
import React from 'react';
import { ResetIcon, ArrowIcon } from '../../../compoments/icon';
export default function ResultCard({
    correctCount = 16,
    totalCount = 20,
    isPassed = true,
    timeTaken = "12:34",
    passScore = 70,
    onRetry,
    onViewDetails,
    onBackToList
}) {
    // Tính toán tỷ lệ đúng tự động
    const correctRatio = Math.round((correctCount / totalCount) * 100);
    const wrongCount = totalCount - correctCount;

    return (
        <div className="w-full max-w-md bg-white rounded-xl border border-gray-100 shadow-xl p-8 overflow-hidden mx-auto">
            {/* Thông tin bảng */}
            <div className="text-center flex flex-col items-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                    Kết quả bài làm
                </span>

                {/* Hiển thị số câu đúng */}
                <h1 className="text-6xl font-extrabold text-[#1E3A8A] leading-none mb-2">
                    {correctCount}
                </h1>

                <span className="text-sm font-semibold text-slate-400 mb-4">
                    / {totalCount} câu
                </span>

                {/* Tag trạng thái Đạt / Không đạt */}
                {isPassed ? (
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 font-bold text-xs px-4 py-1.5 rounded-full border border-emerald-150">
                        <span>ĐẠT</span>
                    </div>
                ) : (
                    <div className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 font-bold text-xs px-4 py-1.5 rounded-full border border-rose-150">
                        <span>CHƯA ĐẠT</span>
                    </div>
                )}
            </div>

            <hr className="border-t border-slate-100/70 my-6" />

            {/* Bảng thống kê */}
            <div className="space-y-4">
                {/* Hàng tỷ lệ đúng */}
                <div>
                    <div className="flex justify-between items-center text-sm font-semibold mb-2">
                        <span className="text-slate-400 font-medium">Tỉ lệ đúng</span>
                        <span className="text-slate-800">{correctRatio}%</span>
                    </div>
                    {/* Thanh phần trăm */}
                    <div className="w-full h-2.5 bg-slate-50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#3A76F5] rounded-full"
                            style={{ width: `${correctRatio}%` }}
                        ></div>
                    </div>
                </div>

                {/* Danh sách thông số chi tiết */}
                <div className="space-y-3 pt-2 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Câu đúng</span>
                        <span className="font-bold text-slate-800">{correctCount} / {totalCount}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Câu sai</span>
                        <span className="font-bold text-slate-800">{wrongCount} / {totalCount}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Thời gian hoàn thành</span>
                        <span className="font-bold text-slate-800">{timeTaken}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Ngưỡng đạt</span>
                        <span className="font-bold text-slate-800">{passScore}%</span>
                    </div>
                </div>
            </div>

            {/* Điều hướng trang */}
            <div className="mt-8 space-y-3">
                {/* Button làm lại */}
                <button onClick={onRetry}
                    className="w-full border border-blue-100 bg-white text-[#3A76F5] py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50/30 transition-colors">
                    <ResetIcon className='h-5 w-5'></ResetIcon>
                    <span>Làm lại</span>
                </button>

                {/* Button xem chi tiết đáp án */}
                <button onClick={onViewDetails}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3.5 rounded-xl font-bold text-sm shadow-sm">
                    Xem chi tiết đáp án
                </button>

                {/* Button comeback ListQuiz */}
                <button onClick={onBackToList}
                    className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm">
                    <ArrowIcon className='h-5 w-5 rotate-180'></ArrowIcon>
                    <span>Quay lại danh sách</span>
                </button>
            </div>
        </div>
    );
}
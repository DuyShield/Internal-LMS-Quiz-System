import React from 'react'
import { CheckIcon, ClockIcon, MonitorIcon, ArrowIcon } from "../../compoments/icon";
export default function historyCard({
    title = "Tên bài thi",
    category = "Danh mục",
    difficulty = "Độ khó",
    time = 0,
    score = 0,
    isCompleted = false
}) {
    const difficultyStyle = {
        "Dễ": "bg-emerald-50 ",
        "Trung bình": "bg-amber-50 text-amber-500",
        "Khó": "bg-rose-50 text-rose-500",
    }

    const currentStyle = difficultyStyle[difficulty] || "bg-slate-50 text-slate-500"
    return (
        <div className="w-full md:max-w-sm w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            {/* Tiêu đề */}
            <div className='flex items-start justify-between gap-4'>
                <div className='flex-1 min-w-0'>
                    <h1 className='text-sm font-bold leading-snug line-clamp-1'>
                        {title}
                    </h1>
                </div>
                {/* Hiển thị tag đã đạt hay chưa */}
                <div>
                    {isCompleted ? (
                        <span className='flex items-center gap-1 px-2.5 py-1 rounded-full'>
                            <CheckIcon className='!text-emerald-500 w-4 h-4.5'></CheckIcon>
                            <h1 className="text-xs text-emerald-500 font-semibold"> Đạt
                            </h1>
                        </span>) :
                        (<span className='flex items-center gap-1 px-2.5 py-1 rounded-full'>
                            <CheckIcon className='text-[#10B981] w-4 h-4.5'></CheckIcon>
                            <h1 className="text-xs font-semibold"> Chưa đạt
                            </h1>
                        </span>)}
                </div>
            </div>
            {/* Thông tin bài học và mức độ khó */}
            <div className='flex items-center gap-2 mt-3 text-xs text-slate-400'>
                <span>{category}</span>
                <span>|</span>
                <span className={`${currentStyle} font-semibold px-2 py-0.5 rounded-md`}>
                    {difficulty}
                </span>
            </div>
            {/* Thống tin bài học */}
            <div className="mt-3 mb-5">
                <div className=" flex justify-between items-center text-xs mb-2 text-slate-400 font-semibold">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1"></ClockIcon>
                            <span className="">{time} phút</span>
                        </div>  
                        <div className="flex items-center">
                            <MonitorIcon className="w-4 h-4 mr-1"></MonitorIcon>
                            <span className="">{score}/10 Điểm</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-slate-300 -mx-6'></hr>
            {/* Button Làm bài */}
            <div>
                <button className='font-semibold flex items-center justify-between gap-2 w-full mt-3 text-blue-500 text-sm'>
                    <span className=''>Xem lại bài</span>
                    <ArrowIcon className='w-5 h-5'></ArrowIcon>
                </button>
            </div>
        </div>

    )
}

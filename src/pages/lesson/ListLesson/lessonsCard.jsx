import React from "react";
import { CheckIcon } from "../../../compoments/icon";
import { Link } from 'react-router-dom';
export default function Lessons({
    id,
    title = "Tên bài giảng",
    description = "Mô tả",
    category = "Danh mục",
    difficulty = "Độ khó",
    progress = 0,
    isCompleted = false
}) {
    const difficultyStyle = {
        "Dễ": "bg-emerald-50 ",
        "Trung bình": "bg-amber-50 text-amber-500",
        "Khó": "bg-rose-50 text-rose-500",
    }

    const currentStyle = difficultyStyle[difficulty] || "bg-slate-50 text-slate-500"
    return (
        <Link to={`/lessons/${id}`} className="lesson-card-link">
            <div className="w-full h-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                    {/* Tiêu đề */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-sm font-bold leading-snug line-clamp-1" title={title}>
                                {title}
                            </h1>
                            <p className="text-xs mt-1 text-slate-400 line-clamp-2 h-8" title={description}>
                                {description}
                            </p>
                        </div>

                        {/* Tag trạng thái */}
                        <div className="shrink-0">
                            {isCompleted ? (
                                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50">
                                    <CheckIcon className="!text-emerald-500 w-4 h-4" />
                                    <span className="text-[0.65rem] text-emerald-500 font-semibold whitespace-nowrap">
                                        Đã học
                                    </span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50">
                                    <CheckIcon className="text-slate-400 w-4 h-4" />
                                    <span className="text-[0.65rem] text-slate-500 font-semibold whitespace-nowrap">
                                        Chưa học
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Thông tin bài học và độ khó */}
                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                        <span>{category}</span>
                        <span>|</span>
                        <span className={`${currentStyle} font-semibold px-2 py-0.5 rounded-md`}>
                            {difficulty}
                        </span>
                    </div>
                </div>

                {/* Thanh Progress Bar */}
                <div className="mt-4 pt-2">
                    <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-slate-400 font-medium">Tiến độ</span>
                        <span className="text-slate-800 font-bold">{progress}%</span>
                    </div>

                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                            className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )

}
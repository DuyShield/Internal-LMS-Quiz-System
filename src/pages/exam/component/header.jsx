import { GraduationCapIcon } from "../../../compoments/icon";
export default function Header({
    avatar = "32x32",
    name = "Nguyễn Văn A",
    title = "ReactJS",
    type = "Frontend",
    difficulty = "Trung bình",
    time = 30,
    isExam = false
}) {
    return (
        <header className="w-full bg-white border-b border-slate-100 shadow-sm px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="h-10 w-10 bg-[#3A76F5] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-[#3A76F5]/30">
                        <GraduationCapIcon props={{ className: "w-5 h-5 text-white" }} />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-slate-800 leading-none">IT Internship</h1>
                        <span className="text-xs text-slate-400">Portal</span>
                    </div>
                </div>

                {/* Thông tin bài thi */}
                <div className="hidden md:flex items-center gap-3 text-sm">
                    <span className="font-bold text-slate-800">{title}</span>
                    <span className="bg-blue-50 text-[#3A76F5] text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100">
                        {type} - {difficulty}
                    </span>
                </div>

                {/* Time và user info */}
                <div className="flex items-center gap-4">
                    {/* Widget Đồng hồ nhỏ */}
                    {isExam &&
                    <div className="flex items-center gap-1.5 bg-blue-50/60 text-[#3A76F5] px-3 py-1.5 rounded-lg border border-blue-100/50 font-semibold text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{time}</span>
                    </div>}

                    {/* Thông tin User */}
                    <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                        <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                            {avatar}
                        </div>
                        <span className="hidden sm:inline text-sm font-medium text-slate-700">
                            {name}
                        </span>
                    </div>
                </div>

            </div>
        </header>
    );
}
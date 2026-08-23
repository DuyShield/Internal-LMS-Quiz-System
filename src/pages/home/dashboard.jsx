import { useEffect, useState } from "react";
import { getStatCards } from "../../compoments/card/statsCard";
import { FireIcon } from "../../compoments/icon";
const Dashboard = () => {
    const [dashboard, setDashboard] = useState({
        totalQuizDone: 10,
        totalQuiz: 15,
        practiceHours: 48,
        averageScore: 8.5,
    });

    const statCards = getStatCards(dashboard);

    // Dữ liệu mẫu cho biểu đồ cột chồng (Stacked Bar Chart) từ T1 -> T7
    const weeklyData = [
        { week: "T1", score: 6.5, countHeight: "35%", scoreHeight: "35%" },
        { week: "T2", score: 7.2, countHeight: "40%", scoreHeight: "38%" },
        { week: "T3", score: 7.8, countHeight: "45%", scoreHeight: "40%" },
        { week: "T4", score: 8.1, countHeight: "55%", scoreHeight: "35%" },
        { week: "T5", score: 8.5, countHeight: "60%", scoreHeight: "32%" },
        { week: "T6", score: 8.3, countHeight: "50%", scoreHeight: "38%" },
        { week: "T7", score: 9.0, countHeight: "55%", scoreHeight: "40%" },
    ];

    // Tính phần trăm cho Widget Tiến độ học tập
    const progressData = {
        studyTimePercent: Math.round((dashboard.practiceHours / 60) * 100) || 0,
        quizDonePercent: Math.round((dashboard.totalQuizDone / dashboard.totalQuiz) * 100) || 0,
        targetScorePercent: Math.round((dashboard.averageScore / 10) * 100) || 0,
    };

    return (
        <div className="p-6 space-y-6">
            {/* Thống kê */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-sm p-5">
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">
                                    {item.title}
                                </p>
                                <h2 className="text-3xl font-bold text-slate-700">
                                    {item.value}
                                    <span className="text-base font-medium text-slate-400 ml-1">
                                        {item.unit}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Widget */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tiến trình làm bài theo tuần */}
                <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 h-[420px] flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="font-bold text-lg text-slate-800">
                                    Tiến trình làm bài theo tuần
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    Điểm số trung bình mỗi tuần
                                </p>
                            </div>
                            {/* Chú thích */}
                            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
                                    Điểm
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
                                    Số bài
                                </span>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex items-end justify-between gap-3 h-52 mt-6 px-2">
                            {weeklyData.map((item, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group">
                                    {/* Hiển thị con số trên đỉnh cột */}
                                    <span className="text-xs font-bold text-slate-700 mb-1.5">
                                        {item.score}
                                    </span>

                                    {/* Stacked Bar */}
                                    <div className="w-full max-w-[48px] flex flex-col justify-end h-full">
                                        {/* Điểm */}
                                        <div
                                            className="w-full bg-blue-600 rounded-t-md transition-all group-hover:bg-blue-700"
                                            style={{ height: item.scoreHeight }}
                                        ></div>
                                        {/* Số bài */}
                                        <div
                                            className="w-full bg-blue-400 rounded-b-md transition-all group-hover:bg-blue-500"
                                            style={{ height: item.countHeight }}
                                        ></div>
                                    </div>

                                    {/* Tiêu đề tuần */}
                                    <span className="text-xs text-slate-400 mt-3 font-medium">
                                        {item.week}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer của Widget 1 */}
                    <div className="flex items-center justify-end pt-4 border-t border-slate-100 text-xs">
                        <button className="text-blue-600 font-semibold hover:text-blue-300 hover:bg-blue-50 bg-blue-50 px-3 py-1.5 rounded-lg">
                            Xem chi tiết
                        </button>
                    </div>
                </div>

                {/* Widget Tiến độ học tập */}
                <div className="bg-white rounded-2xl shadow-sm p-6 h-[420px] flex flex-col justify-between">
                    <div>
                        <h2 className="font-bold text-lg text-slate-800 mb-8">
                            Tiến độ học tập
                        </h2>

                        <div className="space-y-7">
                            {/* Thời gian học tập */}
                            <div className="mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-slate-700">
                                        Lịch học tuần này
                                    </span>
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                         <FireIcon className="w-3 h-3 inline-block pb-0.5"/> Chuỗi 2 ngày
                                    </span>
                                </div>

                                {/* Các ngày trong tuần T2 -> CN */}
                                <div className="grid grid-cols-7 gap-1.5 text-center">
                                    {[
                                        { day: "T2", active: true },
                                        { day: "T3", active: true },
                                        { day: "T4", active: true },
                                        { day: "T5", active: false },
                                        { day: "T6", active: true },
                                        { day: "T7", active: true },
                                        { day: "CN", active: false },
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col items-center gap-1">
                                            <span className="text-[11px] font-medium text-slate-400">
                                                {item.day}
                                            </span>
                                            {/* Ô đánh đấu ngày học */}
                                            <div
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${item.active
                                                    ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                                                    : "bg-slate-200/60 text-slate-400"
                                                    }`}>
                                                {item.active ? "✓" : ""}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bài quiz hoàn thành */}
                            <div>
                                <div className="flex justify-between text-sm mb-2 font-medium">
                                    <span className="text-slate-600">Bài quiz hoàn thành</span>
                                    <span className="text-emerald-600 font-bold">{progressData.quizDonePercent}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                    <div
                                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${progressData.quizDonePercent}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Điểm mục tiêu */}
                            <div>
                                <div className="flex justify-between text-sm mb-2 font-medium">
                                    <span className="text-slate-600">Điểm mục tiêu (9.0)</span>
                                    <span className="text-amber-500 font-bold">{progressData.targetScorePercent}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                    <div
                                        className="bg-amber-500 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${progressData.targetScorePercent}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
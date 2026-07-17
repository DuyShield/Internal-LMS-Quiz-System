import { useEffect, useState } from "react";
import { getStatCards } from "../../compoments/card/statsCard";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState({
        totalQuizDone: 10,
        totalQuiz: 15,
        practiceHours: 48,
        averageScore: 8.5,
    });

    const statCards = getStatCards(dashboard);
    

    return (
        <div className="p-6 space-y-6">
            {/* Thống kê */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-sm p-5"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
                            >
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-6 h-[420px]">
                    <h2 className="font-semibold text-lg">
                        Tiến trình học tập
                    </h2>
                    {/* Chart */}
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-6 h-[420px]">
                    <h2 className="font-semibold text-lg">
                        Tiến độ thực tập
                    </h2>
                    {/* Progress */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
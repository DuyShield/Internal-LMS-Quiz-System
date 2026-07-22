import React from 'react'
import { useEffect, useState } from "react";
import { getHistoryStatCards } from "../../compoments/card/statsCard";
export default function dashboardHistory() {
    const [dashboard, setDashboard] = useState({
        totalQuizDone: 10,
        averageScore: 8.5,
        highestScore: 10,
    });

    const statCards = getHistoryStatCards(dashboard);
    return (
        <div className="py-4 space-y-4">
            {/* Thống kê */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-sm p-5">
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">
                                    {item.title}
                                </p>
                                <h2 className={`text-3xl font-bold ${item.text}`}>
                                    {item.value}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

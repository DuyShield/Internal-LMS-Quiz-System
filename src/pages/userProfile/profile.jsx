import React, { useState } from "react";
import ProfileHeader from "./profileHeader";
import { getStatCards } from "../../compoments/card/statsCard";
import { BookOpen, Clock3, Star } from "lucide-react";

export default function Profile() {
  const [dashboard, setDashboard] = useState({
    totalQuizDone: 10,
    totalQuiz: 15,
    practiceHours: 48,
    averageScore: 8.5,
  });
  const statCards = getStatCards(dashboard);
  return (
    <div className="bg-slate-100 min-h-screen p-6">

      <ProfileHeader />

      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {statCards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm p-5" >
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
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
    </div>
  );
}
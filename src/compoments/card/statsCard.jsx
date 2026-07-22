import { Monitor, Clock3, Star } from "lucide-react";

export const getStatCards = (dashboard) => [
  {
    id: 1,
    title: "Tổng quan bài quiz đã làm",
    value: dashboard.totalQuizDone,
    unit: "bài",
    icon: <Monitor size={24} />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Số giờ thực tập",
    value: dashboard.practiceHours,
    unit: "giờ",
    icon: <Clock3 size={24} />,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    id: 3,
    title: "Điểm trung bình",
    value: dashboard.averageScore,
    unit: "đ",
    icon: <Star size={24} />,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
];

export const getHistoryStatCards = (dashboard) => [
  {
    id: 1,
    title: "Tổng quan bài quiz đã làm",
    value: dashboard.totalQuizDone,
    icon: <Monitor size={24} />,
    bg: "bg-blue-100",
    color: "text-blue-600",
    text: "text-blue-600",
  },
  {
    id: 2,
    title: "Điểm trung bình",
    value: dashboard.averageScore,
    icon: <Clock3 size={24} />,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    text: "text-yellow-600",
  },
  {
    id: 3,
    title: "Điểm cao nhất",
    value: dashboard.highestScore,
    icon: <Star size={24} />,
    bg: "bg-red-100",
    color: "text-red-500",
    text: "text-red-500",
  },
];
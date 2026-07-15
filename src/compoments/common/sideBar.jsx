import React, { useState } from 'react';
import { HomeIcon, PersonIcon, BookIcon, ClockIcon, MonitorIcon, GraduationCapIcon } from "../icon";
import SidebarNavItem from "./sideBarNavItem";

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const menuIcons = [
        { id: 'trang_chu', label: 'Trang chủ', icon: HomeIcon, isActive: true },
        { id: 'bai_giang', label: 'Bài giảng', icon: BookIcon, isActive: false },
        { id: 'kiem_tra', label: 'Kiểm tra', icon: MonitorIcon, isActive: false },
        { id: 'lich_su', label: 'Lịch sử', icon: ClockIcon, isActive: false },
        { id: 'thong_tin', label: 'Thông tin', icon: PersonIcon, isActive: false },
    ];

    return (
        <div className="relative flex h-screen flex-shrink-0">
            {/* Container chính của Sidebar */}
            <aside className={`bg-white border-gray-100 flex flex-col justify-between p-6 
                transition-all duration-300

                /* Responsive Mobile Sidebar*/
                fixed top-0 left-0 h-screen z-50 w-64    
                ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}

                /* Responsive PC Sidebar*/
                 md:relative md:translate-x-0 md:inset-auto md:z-10 md:h-screen
                ${isCollapsed ? 'md:w-20' : 'md:w-64'}
            `}>

                <div className="flex flex-col gap-8">
                    {/* Logo Brand (Khối IT Internship Portal) */}
                    <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : 'px-2'}`}>
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-200">
                            <GraduationCapIcon props={{ className: "w-6 h-6 text-white" }} />
                        </div>
                        {!isCollapsed && (
                            <div className="transition-opacity duration-200">
                                <h1 className="font-bold text-gray-900 text-sm leading-tight">IT Internship</h1>
                                <p className="text-xs text-gray-400">Portal</p>
                            </div>
                        )}
                    </div>

                    {/* Danh sách Menu Navigation */}
                    {!isCollapsed &&
                        <nav className="flex flex-col gap-1">
                            {menuIcons.map((item) => (
                                <SidebarNavItem
                                    key={item.id}
                                    icon={item.icon}
                                    label={item.label}
                                    isActive={item.isActive}
                                    isCollapsed={isCollapsed}
                                />
                            ))}
                        </nav>
                    }
                </div>

                {/*Thông tin học viên*/}
                <div className={`flex items-center gap-3 pt-4 border-t border-gray-100 ${isCollapsed ? 'justify-center' : ''}`}>
                    {/* Avatar*/}
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-semibold text-xs border border-blue-100 flex-shrink-0">
                        32x32
                    </div>
                    {!isCollapsed && (
                        <div className="transition-opacity duration-200">
                            <h2 className="font-semibold text-gray-800 text-sm leading-tight">Nguyễn Văn A</h2>
                            <p className="text-xs text-gray-400 mt-0.5">Intern IT K2026</p>
                        </div>
                    )}
                </div> 
            </aside>
            {/* Nút mũi tên đóng/mở bám ở mép viền bên phải */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={` fixed top-12 z-50 w-9 h-9 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center shadow-sm transition-all duration-300
                {/* Responsive Mobile Sidebar*/}
                ${isCollapsed
                        ? "left-3"
                        : "left-[240px]"
                } md:absolute md:left-auto md:right-[-14px]
            `}
            >
                {isCollapsed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                )}
            </button>

        </div>
    );
}

export default Sidebar;
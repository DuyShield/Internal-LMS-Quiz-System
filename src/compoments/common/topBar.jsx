import React from 'react';
import { ClockIcon, InfoIcon } from "../icon"; 


const Topbar = ({ title = "Trang chủ", subtitle = "Xin chào, Nguyễn Văn A 👋 — Chào mừng trở lại!" }) => {
  return (
    <div className="w-full bg-white h-auto md:h-16 border-b border-gray-200 px-6 pl-auto md:pl-6 py-3 md:py-0 flex md:flex-col md:flex-row md:items-center justify-center md:justify-between gap-3 dynamic-topbar">
      
      {/* Tieu de va loi chao */}
      <div className="flex flex-col justify-center min-w-0">
        {/* Tieu de */}
        <h1 className="text-lg md:text-xl font-bold text-[#0f2d59] leading-tight">
          {title}
        </h1>
        {/* Text xin chào */}
        <p className="text-xs text-gray-400 mt-1 hidden md:block whitespace-nowrap overflow-hidden text-ellipsis">
          {subtitle}
        </p>
        {/* Text xin chào mobile */}
        <p className="text-xs text-gray-400 mt-0.5 block md:hidden line-clamp-1">
          {subtitle.split("—")[0]}
        </p>
      </div>

      {/* Các nút chức năng */}
      {/* self-end giúp đẩy cụm nút dạt sang bên phải khi rớt xuống hàng trên mobile */}
      <div className="flex items-center gap-2 md:gap-3 self-end md:self-auto">
        {/* Nút hiển thị Tuần */}
        <button className="flex items-center gap-1.5 md:gap-2 bg-[#f0f5ff] text-[#1890ff] border border-[#d6e4ff] px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium hover:bg-[#e6f7ff] transition-all whitespace-nowrap">
          <ClockIcon className="text-sm md:text-base w-4 h-4 md:w-5 md:h-5"/>
          <span>Tuần 7 / 12</span>
        </button>

        {/* Nút Trợ giúp / Thông tin */}
        <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#1890ff] hover:border-[#1890ff] transition-all shrink-0">
          <InfoIcon className="text-lg w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

    </div>
  );
};

export default Topbar;
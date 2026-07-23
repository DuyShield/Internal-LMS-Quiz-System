import React from 'react';

const SidebarNavItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <a onClick={onClick} className={`flex items-center gap-3 px-2 py-3 rounded-xl text-sm font-medium transition-all ${
      isActive ? 'bg-blue-500 text-white shadow-md shadow-, blue-100' : 'text-gray-500 hover:bg-gray-50'
    }`}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span>{label}</span>
    </a>
  );
};

export default SidebarNavItem;
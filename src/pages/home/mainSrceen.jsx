import React from 'react'
import Topbar from '../../compoments/common/topBar';
import Sidebar from '../../compoments/common/sideBar';
import Dashboard from './dashboard';
export default function Display() {
  // Lấy dữ liệu từ localStorage
  const userRaw = localStorage.getItem('currentUser');
  const savedUser = userRaw ? JSON.parse(userRaw) : null;
  // Lấy username tại localStorage
  const username = savedUser.fullName;

  return (
    <div>
      <div className="flex w-full h-screen overflow-hidden bg-slate-50 text-gray-800 font-sans antialiased">
        {/* Sidebar */}
        <div className="relative z-50">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <Topbar username={username} />
          <main className="flex-1 p-4 overflow-y-auto">
            {/* Main information */}
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  )
}

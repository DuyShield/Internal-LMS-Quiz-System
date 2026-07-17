import React from 'react'
import Topbar from '../../compoments/common/topBar';
import Sidebar from '../../compoments/common/sideBar';
import FilterBar from '../../compoments/common/filterBar';
import Profile from './profile';
export default function Display() {
  return (
    <div>
      <div className="flex w-full h-screen overflow-hidden bg-slate-50 text-gray-800 font-sans antialiased">
        {/* Sidebar */}
        <div className="relative z-50">
            <Sidebar />
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <Topbar />
          <main className="flex-1 p-4 overflow-y-auto">
            {/* Main information */}
            <Profile></Profile>
          </main>
        </div>
      </div>
    </div>
  )
}

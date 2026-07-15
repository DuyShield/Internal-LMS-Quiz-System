import React from 'react'
import Topbar from '../compoments/common/topBar';
import Sidebar from '../compoments/common/sideBar';
import FilterBar from '../compoments/common/filterBar';
import Dashboard from '../compoments/dashboard/dashboard';
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main information */}
            </div>
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  )
}

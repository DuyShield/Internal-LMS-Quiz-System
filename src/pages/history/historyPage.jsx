import React from 'react'
import Topbar from '../../compoments/common/topBar';
import Sidebar from '../../compoments/common/sideBar';
import FilterBar from '../../compoments/common/filterBar';
import Dashboard from './dashboardHistory';
import HistoryCard from './historyCard';
export default function historyPage() {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-slate-50 text-gray-800 font-sans antialiased">
            {/* Sidebar */}
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <Topbar />
                <main className="flex-1 p-4 overflow-y-auto">
                    {/* Dashboard */}
                    <Dashboard />
                    {/* Phần Filter */}
                    <div className="mb-4">
                        <FilterBar />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Main information */}
                        <HistoryCard />
                    </div>
                </main>
            </div>
        </div>
    )
}

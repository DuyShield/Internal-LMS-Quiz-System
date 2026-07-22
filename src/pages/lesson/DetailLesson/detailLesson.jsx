import React, { useState } from 'react'
import Topbar from '../../../compoments/common/topBar';
import Sidebar from '../../../compoments/common/sideBar';
import { SaveIcon, ShareIcon, ClockIcon } from '../../../compoments/icon';
import RenderVideo from './render';
export default function DetailLesson() {
    const [detailLesson, setDetailLesson] = useState([]);

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
                        <div className="flex flex-col w-full px-2">
                            {/* {detailLesson.map((detailLesson) => (
                            
                        ))} */}
                            <div className="flex gap-2 text-xs text-gray-300 font-semibold rounded-md ">
                                <p className="py-2">Frontend</p>
                                <p className="py-2">|</p>
                                <span className="bg-amber-50 text-amber-500 px-1 py-2 rounded-sm">Trung bình</span>
                                <div class="flex items-center ml-auto gap-4">
                                    <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                        <SaveIcon className="w-4 h-4" />
                                        <span>Lưu bài</span>
                                    </button>

                                    <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                        <ShareIcon className="w-4 h-4" />
                                        <span>Chia sẻ</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="gap-2 text-2xl font-bold ">Tên bài giảng</h1>
                                <p className="text-sm text-gray-400">Nội dung bài giảng</p>
                            </div>
                            {/* Video */}
                            <div className="flex flex-col mt-4 gap-2">
                                <RenderVideo url="https://www.youtube.com/watch?v=cwfez8RKohA"></RenderVideo>
                            </div>
                            {/* Progress bar */}
                            <div className="bg-white mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                <ClockIcon className="text-blue-500" />

                                <span className="text-sm text-gray-600">Tiến độ bài học</span>

                                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-blue-500 rounded-full"
                                        style={{ width: `35%` }}
                                    />
                                </div>
                                <span className="text-sm font-semibold">{35}%</span>
                                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                    Đánh dấu hoàn thành
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

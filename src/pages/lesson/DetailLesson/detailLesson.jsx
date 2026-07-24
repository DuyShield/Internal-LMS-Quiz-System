import React, { useState, useEffect } from 'react'
import Topbar from '../../../compoments/common/topBar';
import Sidebar from '../../../compoments/common/sideBar';
import { SaveIcon, ShareIcon, ClockIcon } from '../../../compoments/icon';
import RenderVideo from './render';
import { getCourseById } from '../../../services/lessonsService';
import { useParams, useNavigate } from 'react-router-dom';
export default function DetailLesson() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [lesson, setLesson] = useState(null);
    const navigate = useNavigate();
    const handleLogout = (e) => {
        navigate('/lessons');
    }
    useEffect(() => {
        const fetchLesson = async () => {
            try {
                setLoading(true);

                const data = await getCourseById(id);

                setLesson(data);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu khóa học:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLesson();
    }, [id]);

    if (loading) {
        return <div className="p-5 text-center">Đang tải bài học...</div>;
    }

    if (!lesson) {
        return <div className="p-5 text-center">Không tìm thấy bài học!</div>;
    }

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
                            <div className="flex gap-2 text-xs text-gray-300 font-semibold rounded-md ">
                                <p className="py-2">{lesson.category}</p>
                                <p className="py-2">|</p>
                                <span className="bg-amber-50 text-amber-500 px-1 py-2 rounded-sm">{lesson.difficulty}</span>
                                <div class="flex items-center ml-auto gap-4">
                                    <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                                        <SaveIcon className="w-4 h-4" />
                                        <span>Lưu bài</span>
                                    </button>

                                    <button onClick={handleLogout} class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                                        <span>Trở về</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="gap-2 text-2xl font-bold ">{lesson.title}</h1>
                                <p className="text-sm text-gray-400">{lesson.description}</p>
                            </div>
                            {/* Video */}
                            <div className="flex flex-col mt-4 gap-2">
                                <RenderVideo url={`${lesson.videoUrl}`}></RenderVideo>
                            </div>
                            {/* Progress bar */}
                            <div className="bg-white mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                <ClockIcon className="text-blue-500" />

                                <span className="text-sm text-gray-600">Tiến độ bài học</span>

                                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-blue-500 rounded-full"
                                        style={{ width: `${lesson.progress}` }}
                                    />
                                </div>
                                <span className="text-sm font-semibold">{lesson.progress}%</span>
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

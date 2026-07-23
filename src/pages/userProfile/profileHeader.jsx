import React from 'react';

export default function ProfileHeader({ onOpenEdit, onOpenChangePass, currentUser }) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
            {/* Banner */}
            <div className="h-24 bg-gradient-to-r from-blue-500 to-sky-300 md:h-28"></div>

            {/* Nội dung */}
            <div className="flex flex-col gap-5 px-4 pb-5 pt-3 md:flex-row md:items-end md:justify-between md:px-6 md:pb-6">
                {/* Avatar + Thông tin */}
                <div className="flex items-end gap-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Avatar"
                        className="-mt-10 h-16 w-16 rounded-full border-4 border-white bg-white object-cover shadow md:-mt-12 md:h-20 md:w-20"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
                            {currentUser?.fullName || "Nguyễn Văn A"}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {currentUser?.email || "nguyenvana@intern.vn"}
                        </p>

                        <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                            Intern FE K2026
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex w-full gap-3 md:w-auto">
                    <button
                        type="button"
                        onClick={onOpenEdit}
                        className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 md:flex-none">
                        Chỉnh sửa
                    </button>

                    <button
                        type="button"
                        onClick={onOpenChangePass}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 md:flex-none">
                        Đổi mật khẩu
                    </button>
                </div>
            </div>
        </div>
    );
}
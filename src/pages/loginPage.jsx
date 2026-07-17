import React, {useEffect, useState } from "react";
import { EyeOnIcon, EyeOffIcon, GraduationCapIcon } from "../compoments/icon";


export default function LoginPage() {
    const [username, setUsername] = useState(() => {
        return localStorage.getItem('userAccount') || '';
    });
    //Lưu password với localstorage
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('đăng nhập: ', username, password);
    };
    //Lưu username với localstorage
    useEffect(() => {
        if(username){
            localStorage.setItem('userAccount', username);
        }else {
            localStorage.removeItem('userAccount');
        }
        
    }, [username]);
    return (
        <div className="min-h-screen bg-gray-100 text-gray-600 flex items-center justify-center font-sans p-4">
            <div className="bg-white w-96 rounded-xl shadow-md p-8 flex flex-col space-y-6">
                
                {/* Icon và Tiêu đề */}
                <div className="text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center text-white shadow-xs">
                        <GraduationCapIcon />
                    </div>
                    <h1 className="text-xl font-bold text-slate-900 mt-4">IT Internship Portal</h1>
                    <p className="text-sm text-slate-500 mt-1">Hệ thống ôn tập kiến thức nội bộ</p>
                </div>

                {/* Form login */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-slate-700 block text-left">Tên Đăng Nhập</label>
                        <input 
                            type="text" 
                            placeholder="tên đăng nhập" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand"
                            required 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-slate-700 block text-left">Mật Khẩu</label>
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder="Nhập mật khẩu" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm pr-10 focus:outline-none focus:border-brand"
                                required 
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm flex items-center justify-center cursor-pointer"
                            >
                                {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
                            </button>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-brand hover:bg-brand-hover text-white p-3 rounded-lg font-bold text-sm shadow-xs transition cursor-pointer"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>

                {/* Khung thông báo nhỏ */}
                <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-xs font-semibold flex items-center space-x-2">
                    <span className="flex-shrink-0">ℹ️</span>
                    <span className="text-left">Tài khoản được cấp bởi bộ phận đào tạo IT</span>
                </div>

                {/* Footer */}
                <div className="text-center pt-2">
                    <span className="text-[10px] text-slate-400">© 2026 IT Training Dept.</span>
                </div>

            </div>
        </div>
    );
}

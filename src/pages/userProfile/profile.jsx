import React, { useState, useEffect } from "react";
import ProfileHeader from "./profileHeader";
import { getStatCards } from "../../compoments/card/statsCard";
import { BookOpen, Clock3, Star } from "lucide-react";
import EditProfileModal from './EditProfileModal';
import ChangePasswordModal from './ChangePassModal';
import { changeProfile, changePass, getUserById } from '../../services/changeInfoService';

export default function Profile() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPassOpen, setIsPassOpen] = useState(false);
  const [dashboard, setDashboard] = useState({
    totalQuizDone: 10,
    totalQuiz: 15,
    practiceHours: 48,
    averageScore: 8.5,
  });
  const statCards = getStatCards(dashboard);
  // Lấy dữ liệu từ localStorage
  const userRaw = localStorage.getItem('currentUser');
  const savedUser = userRaw ? JSON.parse(userRaw) : null;
  const [currentUser, setCurrentUser] = useState(savedUser);
  // Lấy thống kê người dùng theo id
  useEffect(() => {
    if (savedUser?.id) {
      getUserById(savedUser.id)
        .then(setCurrentUser)
        .catch((err) => console.error("Lỗi lấy thông tin user:", err));
    }
  }, []);
  // Xử lý thay đổi thông tin
  const handleSaveInfo = async (updatedData) => {
    try {
      const updatedUser = await changeProfile(currentUser.id, updatedData);


      const newUserData = { ...currentUser, ...updatedUser };
      // Cập nhật lại LocalStorage
      setCurrentUser(newUserData);
      localStorage.setItem('currentUser', JSON.stringify(newUserData));

      alert('Cập nhật thông tin thành công!');
    } catch (error) {
      console.error('Lỗi cập nhật profile:', error);
    }
  };

  // Xử lý đổi mật khẩu
  const handleChangePassword = async (passwordData) => {
    try {
      await changePass(currentUser.id, passwordData.newPassword);
      alert('Cập nhật thông tin thành công!');
    } catch (error) {
      console.error('Lỗi đổi mật khẩu:', error);
    }
  };
  return (
    <div className="bg-slate-100 min-h-screen p-6">

      <ProfileHeader
        onOpenEdit={() => setIsEditOpen(true)}
        onOpenChangePass={() => setIsPassOpen(true)}
        currentUser={currentUser}
      />

      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {statCards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm p-5" >
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div>
                {/* username*/}
                <p className="text-sm text-slate-500">
                  {currentUser?.fullname || "Nguyễn Văn A"}
                </p>
                {/* Email */}
                <h2 className="text-3xl font-bold text-slate-700">
                  {item.value}
                  <span className="text-base font-medium text-slate-400 ml-1">
                    {item.unit}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditProfileModal
        key={isEditOpen ? 'edit-open' : 'edit-closed'}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        currentUser={currentUser}
        onSave={handleSaveInfo}
      />

      <ChangePasswordModal
        key={isPassOpen ? 'pass-open' : 'pass-closed'}
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
        onChangePassword={handleChangePassword}
      />
    </div>
  );
}
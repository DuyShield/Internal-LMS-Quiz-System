import api from "./api";

export const changeProfile = async (userId, updatedData) => {
    const response = await api.patch(`/users/${userId}`, updatedData);
    return response.data;
}

export const changePass = async (userId, oldPassword, newPassword) => {
    const response = await api.patch(`/users/${userId}`, { password: newPassword });
    return response.data;
}

export const getUserById = async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
}
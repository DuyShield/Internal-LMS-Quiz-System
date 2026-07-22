import api from "./api";

export const login = async (username, password) => {
    const response = await api.get('/users', { username, password });
    return response.data;
}
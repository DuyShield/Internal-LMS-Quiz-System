import api from "./api";

export const getQuizzesByUserId = async () => {
    const response = await api.get('/lessons');
    return response.data;
}

export const getCourseById = async (id) => {
  const response = await api.get(`/lessons/${id}`);
  return response.data;
};

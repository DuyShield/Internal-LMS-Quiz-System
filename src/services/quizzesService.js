import api from './api';
export const getQuizzes = async () => {
    const response = await api.get('/courses');
    return response.data;
}

export const getQuizById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};
import api from './api';
export const getQuizzes = async () => {
  const response = await api.get('/quizzes');
  return response.data;
}

export const getQuizById = async (id) => {
  const response = await api.get(`/quizzes/${id}`);
  return response.data;
};

export const getQuestionsByQuizId = async (id) => {
  const response = await api.get(`/questions?quizId=${id}`);
  return response.data;
};
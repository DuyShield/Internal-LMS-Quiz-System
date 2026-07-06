import api from './api';
export const quizService = {
    // Gọi API để lấy danh sách câu hỏi
    getAllQuizzes: async () => { 
        const response = await api.get('/quizzes');
        return response.data;
    },
    // Goi API để lấy thông tin chi tiết của một câu hỏi theo ID course
    getQuizByCourseId: async (id) => {
        const response = await api.get(`/quizzes?courseId=${courseId}`);
        return response.data;
    }
}
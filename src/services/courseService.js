import api from './api';
export const getCourses = async () => {
    // Gọi API để lấy danh sách khóa học
    getAllCourses = async () => {
        const response = await api.get('/courses');
        return response.data;
    } 
    // Gọi API để lấy thông tin chi tiết của một khóa học theo ID
    getCourseById = async (id) => {
        const response = await api.get(`/courses/${id}`);
        return response.data;
    }
    // Gọi API để tạo một khóa học mới
    createCourse = async (courseData) => {
        const response = await api.post('/courses', courseData);
        return response.data;
    }
}
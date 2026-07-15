import api from "./api";

export const getLessons = async () => {
    const response = await api.get('/lessons');
    return response.data;
}

export const getCourseById = async (id) => {
  const response = await api.get(`/lessons/${id}`);
  return response.data;
};

// export const createCourse = async (courseData) => {
//   const response = await api.post('/lessons', lessonData);
//   return response.data;
// };
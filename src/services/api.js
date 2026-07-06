import axios from 'axios';
const api = axios.create({
    //Đường dẫn mockapi 
    baseURL: 'https://6a4bcbf3f5eab0bb6b637c14.mockapi.io/data/:endpoint',
    headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
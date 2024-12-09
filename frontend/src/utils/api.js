import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    } else {
        delete req.headers.Authorization; // Ensure no Authorization header is added for unauthenticated requests
    }
    return req;
});

export default API;



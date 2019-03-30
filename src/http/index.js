import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
});

http.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
}), error => Promise.reject(error));

export default http;

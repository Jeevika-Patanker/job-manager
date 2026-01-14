import axios from 'axios';

if (!import.meta.env.VITE_BACKEND) {
  console.error('VITE_BACKEND is not defined');
}

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api/v1`,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (
    token &&
    !config.url.includes('/auth/login') &&
    !config.url.includes('/auth/register')
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

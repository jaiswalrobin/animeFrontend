import useErrorStore from '@/stores/errorStore';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});


axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {handleUnauthorized, handleForbidden, handleOtherErrors} = useErrorStore.getState()
    if (error.response && error.response.status === 401) {
      handleUnauthorized()
      console.error('Unauthorized. Redirecting to login...');
      window.location.href = '/auth/login';
    } else if (error.response.status === 403) {
      handleForbidden()
    } else {
      handleOtherErrors(error)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

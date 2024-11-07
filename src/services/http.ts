import axios from 'axios';

// Create an instance of Axios with the base configuration
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002/api', // The base URL for your API
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add a request interceptor to attach tokens (for authentication)
axiosClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage or auth store
    // const token = localStorage.getItem('token'); // Or get it from Zustand auth store
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., token expired or invalid)
      // You could also automatically logout the user here
      console.error('Unauthorized. Redirecting to login...');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

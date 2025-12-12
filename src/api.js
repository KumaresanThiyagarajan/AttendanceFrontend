import axios from 'axios';

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'https://attendancedb.onrender.com';

// Create axios instance with base URL
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 seconds timeout
});

// Request interceptor for logging (optional)
api.interceptors.request.use(
    (config) => {
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        console.error('API Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Server responded with error status
            console.error('API Error Response:', error.response.status, error.response.data);
        } else if (error.request) {
            // Request made but no response received
            console.error('API No Response:', error.request);
        } else {
            // Error in request setup
            console.error('API Request Setup Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;

import axios from 'axios';

// Create an Axios instance with the base configuration
const api = axios.create({
  baseURL: 'http://localhost:7777', // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});



export default api;

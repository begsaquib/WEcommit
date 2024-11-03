// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7777', // your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

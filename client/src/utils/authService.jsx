
import api from './api';

export const signUp = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data; // Send the error message to the caller
  }
};

export const login = async (userData) => {
  try {
    console.log(userData);
    
    const response = await api.post('/login', userData);
    return response.data; // Handle successful login response
  } catch (error) {
    throw error.response.data; // Send the error message to the caller
  }
};

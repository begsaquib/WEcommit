
import api from './api';

export const signUp = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data; 
  }
};

export const login = async (userData) => {
  try {
    
    
    const response = await api.post('/login', userData);
    return response.data; 
  } catch (error) {
    throw error.response.data; 
  }
};

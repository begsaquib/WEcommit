// utils/authHelper.js
export const isAuthenticated = () => {
  
  const token = document.cookie.split('; ').find(row => row.startsWith('token='));
   console.log(token);
    return token ? true : false;
  };
  
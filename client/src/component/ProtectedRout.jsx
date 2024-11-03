// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // Make sure you have this package installed

const ProtectedRoute = ({children}) => {
  const token = Cookies.get("token") 
  console.log(token)
  return token ? children : <Navigate to="/" />; // Redirect to login if no token
};

export default ProtectedRoute;




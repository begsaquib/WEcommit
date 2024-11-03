import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { login } from "../utils/authService"; // Adjust the path based on your project structure
import Cookies from "js-cookie";
const Login = () => {
  const [formData, setFormData] = useState({
    userName: "Maxy",
    password: "Maxy@123",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData); 
      console.log(response);
      
      Cookies.set("token",response.token)
      navigate("/home"); // Redirect to home page upon success
    } catch (error) {
      setError(error); // Set the error message to display
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-blue-600">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md"
        >
          <h2 className="mb-6 text-2xl font-bold">Login</h2>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <input
            type="text"
            name="userName" // Change name from 'username' to 'userName'
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
          <p>
            New here?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

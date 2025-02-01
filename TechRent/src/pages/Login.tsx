import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Log the current state
    console.log('Form submission attempted:', { isLogin, formData });
    console.log('API URL:', import.meta.env.VITE_API_URL);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      setIsLoading(false);
      return;
    }

    try {
      const url = isLogin 
        ? `${import.meta.env.VITE_API_URL}/api/auth/login` 
        : `${import.meta.env.VITE_API_URL}/api/auth/register`;
      
      console.log('Sending request to:', url);

      const { data } = await axios.post(url, {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });

      console.log('Response received:', data);

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/profile");
      } else {
        alert("Account created! Please login.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Error details:', error);
      alert(error.response?.data?.message || "An error occurred. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? "Login" : "Create Account"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-2 rounded disabled:bg-indigo-300"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : (isLogin ? "Login" : "Sign Up")}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button onClick={() => setIsLogin(!isLogin)} className="text-indigo-600">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;

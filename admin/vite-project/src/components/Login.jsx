import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value) => {
    if (value.endsWith(".")) {
      setPasswordError("Password should not end with a period.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      // Log raw inputs for debugging
      console.log("Raw email:", email, "Raw password:", password);
      // Trim inputs before sending
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      console.log("Trimmed email:", trimmedEmail, "Trimmed password:", trimmedPassword);

      // Validate password
      if (!validatePassword(trimmedPassword)) {
        return;
      }

      const response = await axios.post(backendUrl + "/api/user/admin", { email: trimmedEmail, password: trimmedPassword });
      console.log("Login response:", response.data);
      if (response.data.success) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token); // Persist token in local storage
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
      >
        <div className="space-y-6">
          <p className="text-2xl font-bold text-center text-gray-800">
            <span className="text-blue-600">Admin</span> Panel
          </p>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              value={password}
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-medium rounded-md transition duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
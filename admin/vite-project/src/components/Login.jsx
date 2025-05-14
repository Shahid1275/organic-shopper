import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
   try {
     e.preventDefault();
     const response = await axios.post(backendUrl + '/api/user/admin',{email,password});
     console.log(response.data);
     if(response.data.success){
      setToken(response.data.token);
      toast.success(response.data.message)
     }
     else{
      toast.error(response.data.message)
     }
   } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
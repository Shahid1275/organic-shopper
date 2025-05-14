import React, { useState, useEffect } from 'react'; // Added useEffect
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'; // Added useNavigate
import List from './pages/List';
import Add from './pages/Add';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex'>
            <SideBar />
            <div className='flex-1 p-4'>
              <Routes>
                <Route path="/" element={<Navigate to="/add" />} /> {/* Fixed syntax */}
                <Route path="/list" element={<List token={token} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
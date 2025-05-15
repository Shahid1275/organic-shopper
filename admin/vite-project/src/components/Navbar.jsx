import React from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Navbar = ({ setToken }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    setToken(''); // Clear token state in App
    localStorage.setItem('token', ''); // Clear token in localStorage
    navigate('/'); // Navigate to login page
  };

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,70px)]' src={assets.logo} alt="Company Logo" />
      <button
        onClick={handleLogout}
        className='cursor-pointer bg-gray-600 text-white py-1 px-5 sm:px-7 sm:py-1 rounded-full text-xs sm:text-sm'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
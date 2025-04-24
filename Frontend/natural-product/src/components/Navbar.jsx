import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <img className="w-40" src={assets.logo} alt="Logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
         <p>HOME</p>
         <hr  className='w-3/4 border-none h-0.5 bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
         <p>COLLECTION</p>
         <hr  className='w-3/4 border-none h-0.5 bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
         <p>ABOUT</p>
         <hr  className='w-3/4 border-none h-0.5 bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
         <p>CONTACT</p>
         <hr  className='w-3/4 border-none h-0.5 bg-gray-700 hidden'/>
        </NavLink>
      </ul> 
      <div className='flex items-center gap-6'>
        <img className='w-5 cursor-pointer' src={assets.search_icon} alt="search_icon" />
        <div className='group-relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="cart" />
            <div className='pt-4 group-hover:block hidden absolute dropdown-menu right-0
            '>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
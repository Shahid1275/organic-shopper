import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSearch } from '../redux/shopSlice';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total cart items
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0);
    }, 0);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <img
        onClick={() => navigate('/')}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-3/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => dispatch(setShowSearch(true))}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="Search"
        />
        <div className="group relative">
          <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          <div
            className="absolute right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform group-hover:translate-y-0 translate-y-[-10px] z-10"
            role="menu"
            aria-label="Profile menu"
          >
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded-lg shadow-lg">
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition-colors" role="menuitem">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition-colors" role="menuitem">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition-colors" role="menuitem">
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5 cursor-pointer" />
          <p className="absolute -top-2 -right-2 text-xs w-4 h-4 text-center text-white bg-black rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out z-50 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 py-3 px-6 cursor-pointer border-b border-gray-300"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropdown" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-3 px-6 border-b border-gray-300 hover:bg-gray-100 transition-colors"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-3 px-6 border-b border-gray-300 hover:bg-gray-100 transition-colors"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-3 px-6 border-b border-gray-300 hover:bg-gray-100 transition-colors"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-3 px-6 border-b border-gray-300 hover:bg-gray-100 transition-colors"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
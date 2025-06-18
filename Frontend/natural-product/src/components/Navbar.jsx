import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  setShowSearch,
  setCountry,
  setCurrency,
  setLanguage,
  setToken,
} from "../redux/shopSlice";
import { FiGlobe } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [currencyDropdownVisible, setCurrencyDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { cartItems, country, currency, language, countries, token } =
    useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total cart items
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizes) => {
      return (
        total +
        Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0)
      );
    }, 0);
  };

  const handleLogout = async () => {
    if (token) {
      setIsLoggingOut(true);
      setProfileDropdownVisible(false);
      try {
        // Clear local storage and state
        localStorage.removeItem("token");
        dispatch(setToken(""));
        dispatch(clearCart());

        // Show success toast and navigate immediately
        toast.success("Logged out successfully!", { autoClose: 2000 });
        navigate("/login", { replace: true });
        setIsLoggingOut(false);
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("Failed to log out. Please try again.");
        setIsLoggingOut(false);
      }
    }
  };

  // Handle mouse enter for profile icon (only for logged-in users)
  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    if (token) {
      setProfileDropdownVisible(true);
    }
  };

  // Handle mouse leave to start hide delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setProfileDropdownVisible(false);
    }, 200);
    setHideTimeout(timeout);
  };

  // Handle click on profile icon
  const handleProfileClick = () => {
    if (!token) {
      navigate("/login");
    }
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-40 cursor-pointer"
      />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-3/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-3/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-3/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-3/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => dispatch(setShowSearch(true))}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
        />

        {/* Currency Dropdown */}
        <div className="relative">
          <button
            onClick={() => setCurrencyDropdownVisible(!currencyDropdownVisible)}
            className="flex items-center gap-2 text-gray-700"
            aria-label="Select country and currency"
          >
            <FiGlobe className="w-5 h-5" />
            <span className="text-sm">{country}</span>
            <img src={assets.dropdown_icon} alt="dropdown" className="h-3" />
          </button>
          <div
            className={`absolute right-0 top-8 w-64 bg-white border border-gray-200 rounded shadow-lg z-20 ${
              currencyDropdownVisible ? "" : "hidden"
            }`}
          >
            <div className="p-4">
              <div className="mb-4">
                <select
                  value={country}
                  onChange={(e) => {
                    dispatch(setCountry(e.target.value));
                    setCurrencyDropdownVisible(false);
                  }}
                  className="w-full p-2 border border-gray-200 rounded text-sm"
                >
                  {countries.map((item) => (
                    <option key={item.country} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => dispatch(setLanguage(e.target.value))}
                  className="w-full p-2 border border-gray-200 rounded text-sm"
                  disabled
                >
                  <option
                    value={
                      countries.find((c) => c.country === country)?.language ||
                      "English"
                    }
                  >
                    {countries.find((c) => c.country === country)?.language ||
                      "English"}
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => dispatch(setCurrency(e.target.value))}
                  className="w-full p-2 border border-gray-200 rounded text-sm"
                  disabled
                >
                  <option
                    value={
                      countries.find((c) => c.country === country)?.currency ||
                      "USD"
                    }
                  >
                    {countries.find((c) => c.country === country)
                      ?.currencySymbol || "$"}{" "}
                    (
                    {countries.find((c) => c.country === country)
                      ?.currencyName || "US Dollar"}
                    )
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Icon */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer transition-transform duration-200 group-hover:scale-110"
            onClick={handleProfileClick}
            aria-label={token ? "Open profile menu" : "Go to login"}
          />
          <div
            className={`absolute right-0 top-8 w-36 bg-white border border-gray-200 rounded shadow-lg z-20 ${
              profileDropdownVisible ? "" : "hidden"
            }`}
            role="menu"
            aria-label="Profile menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-2 py-3 px-5 text-gray-600">
              {token && (
                <>
                  <p
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
                    role="menuitem"
                  >
                    My Profile
                  </p>
                  <p
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
                    role="menuitem"
                    onClick={() => navigate("/orders")}
                  >
                    Orders
                  </p>
                  <p
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <NavLink to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute -top-2 -right-2 text-xs w-4 h-4 text-center text-white bg-black rounded-full">
            {getCartCount()}
          </p>
        </NavLink>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div className={`fixed inset-0 bg-white z-50 ${visible ? "" : "hidden"}`}>
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 py-3 px-6 cursor-pointer border-b border-gray-300"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-3 px-6 border-b border-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-3 px-6 border-b border-gray-300"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-3 px-6 border-b border-gray-300"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-3 px-6 border-b border-gray-300"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

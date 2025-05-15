
import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
   <div className="bg-gray-500 text-white h-[120vh] fixed lg:static left-0 top-11 z-40 shadow-lg transition-all duration-300 ease-in-out">

      <nav className="space-y-2 p-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-300 hover:text-white'
            } lg:flex-row flex-col lg:w-auto w-12 lg:gap-2 gap-1`
          }
        >
          <img className="w-5 h-5 opacity-90" src={assets.add_icon} alt="Add icon" />
          <span className="lg:block hidden whitespace-nowrap">Add Items</span>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-300  hover:text-white'
            } lg:flex-row flex-col lg:w-auto w-12 lg:gap-2 gap-1`
          }
        >
          <img className="w-5 h-5 opacity-90" src={assets.order_icon} alt="List icon" />
          <span className="lg:block hidden whitespace-nowrap">List Items</span>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-300  hover:text-white'
            } lg:flex-row flex-col lg:w-auto w-12 lg:gap-2 gap-1`
          }
        >
          <img className="w-5 h-5 opacity-90" src={assets.order_icon} alt="Orders icon" />
          <span className="lg:block hidden whitespace-nowrap">Orders</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default SideBar
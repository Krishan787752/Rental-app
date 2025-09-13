import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 shadow-sm bg-white">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        {/* Top Row: Hamburger + Centered Logo */}
        <div className="relative flex items-center justify-center px-4 py-3 border-b bg-white z-50">
          <FaBars
            className="text-2xl cursor-pointer absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => setMenuOpen(true)}
          />
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold text-teal-700">
            Rental App
          </h1>
        </div>

        {/* Rounded Navbar below logo */}
        <div className="mx-4 mt-3 mb-2 z-40">
          <div className="flex items-center justify-between bg-white rounded-full shadow px-4 py-2">
            {/* Location */}
            <div className="flex items-center text-gray-600">
              <MdLocationOn className="text-xl mr-1" />
              <span>Delivery to</span>
              <span className="ml-1 font-semibold">560068</span>
            </div>
            {/* Icons */}
            <div className="flex items-center space-x-4">
              <FaSearch className="text-gray-700 text-xl cursor-pointer" />
              <FaHeart className="text-gray-700 text-xl cursor-pointer" />
              <FaShoppingCart className="text-gray-700 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Sidebar Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <div className="w-6" />
          </div>
          {/* Menu Items */}
          <div className="flex flex-col space-y-4 px-6 py-6">
            <NavLink to="/Pages/Buy" className="font-medium text-lg cursor-pointer hover:text-blue-600">Buy</NavLink>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaClock className="text-teal-600" />
              <span className="font-medium text-lg">Rent</span>
            </div>
            <span className="font-bold text-purple-500 text-lg cursor-pointer">UNLMTD</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-extrabold text-teal-700">Rental App</h1>
          <div className="flex items-center space-x-6 text-lg">
            <div className="flex items-center text-gray-600 text-base">
              <MdLocationOn className="text-2xl mr-1" />
              <span>Delivery to</span>
              <span className="ml-1 font-semibold">560068</span>
            </div>
            <NavLink to="/Pages/Buy" className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
              <span className="font-medium">Buy</span>
              <span>▼</span>
            </NavLink>
            <div className="flex items-center space-x-1 cursor-pointer">
              <FaClock className="text-teal-600 text-xl" />
              <span className="font-medium">Rent</span>
              <span>▼</span>
            </div>
            <span className="font-bold text-purple-500">UNLMTD</span>
          </div>
        </div>
        {/* Middle Search Bar */}
        <div className="flex-1 mx-6">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full">
            <input
              type="text"
              placeholder="What are you searching for?"
              className="flex-1 bg-transparent outline-none text-base"
            />
            <FaSearch className="text-gray-500 text-xl" />
          </div>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-8 text-gray-700">
          <FaUser className="cursor-pointer text-2xl" />
          <FaHeart className="cursor-pointer text-2xl" />
          <FaShoppingCart className="cursor-pointer text-2xl" />
        </div>
      </div>
    </nav>
  );
}

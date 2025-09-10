import { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 shadow-sm bg-white px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-teal-700">Rental App</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          {/* Location */}
          <div className="flex items-center text-gray-600 text-base">
            <MdLocationOn className="text-2xl mr-1" />
            <span>Delivery to</span>
            <span className="ml-1 font-semibold">560068</span>
          </div>

          {/* Buy Dropdown */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">Buy</span>
            <span>▼</span>
          </div>

          {/* Rent Dropdown */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaClock className="text-teal-600 text-xl" />
            <span className="font-medium">Rent</span>
            <span>▼</span>
          </div>

          {/* UNLMTD */}
          <span className="font-bold text-purple-500">UNLMTD</span>
        </div>
      </div>

      {/* Middle Search Bar (hidden on small screens) */}
      <div className="hidden md:flex flex-1 mx-6">
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
      <div className="hidden md:flex items-center space-x-8 text-gray-700">
        <FaUser className="cursor-pointer text-2xl" />
        <FaHeart className="cursor-pointer text-2xl" />
        <FaShoppingCart className="cursor-pointer text-2xl" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {menuOpen ? (
          <FaTimes
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
          <div className="flex items-center text-gray-600">
            <MdLocationOn className="text-xl mr-1" />
            <span>Delivery to</span>
            <span className="ml-1 font-semibold">560068</span>
          </div>
          <span className="cursor-pointer font-medium">Buy ▼</span>
          <span className="cursor-pointer font-medium">Rent ▼</span>
          <span className="font-bold text-purple-500">UNLMTD</span>
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <div className="flex space-x-6 text-gray-700">
            <FaUser className="cursor-pointer text-xl" />
            <FaHeart className="cursor-pointer text-xl" />
            <FaShoppingCart className="cursor-pointer text-xl" />
          </div>
        </div>
      )}
    </nav>
  );
}

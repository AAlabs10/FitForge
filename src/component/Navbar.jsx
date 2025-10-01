import React, { useState } from 'react';
import { href, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* You can replace this with your actual logo image or SVG */}
          <img src="fit-removebg-preview.png" alt="Fitness Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">FITFORGE</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Courses</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Schedules</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a>
        </div>
      </div>

      {/* Mobile menu (appears when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2 border-b border-gray-100">Home</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2 border-b border-gray-100">Courses</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2 border-b border-gray-100">About</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2 border-b border-gray-100">Schedules</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2 border-b border-gray-100">Pricing</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition duration-300 p-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
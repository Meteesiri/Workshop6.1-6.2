
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-xl font-bold text-gray-800 dark:text-white">
          โลโก้เว็บไซต์
        </div>


        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
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

        <div className={`md:flex items-center space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex-row flex-col absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 transition-transform duration-300 ease-in-out transform md:transform-none`}>
          <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 md:py-0 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 md:py-0 transition-colors duration-200">
            About
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 md:py-0 transition-colors duration-200">
            Services
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 md:py-0 transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
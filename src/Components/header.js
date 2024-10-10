import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({onClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">EduTech+</div>

        <nav className="hidden md:flex gap-5">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>

        <div href="#signup" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer" onClick={onClick}>
          Get Started
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      <nav
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex justify-end items-center p-4">
          <button onClick={closeMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-4 p-4">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><div href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer" onClick={closeMenu}>Get Started</div></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-blue-500 h-14">
      <div className="flex items-center justify-between px-8 h-full">
        <div className="text-white text-2xl font-bold">
          <h1 className="py-3">ABHI ESTATES</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-6 text-white`}>
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500`}>
        <ul className="text-center py-2 text-white">
          <li className="hover:text-gray-300 py-2">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="hover:text-gray-300 py-2">
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="hover:text-gray-300 py-2">
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="hover:text-gray-300 py-2">
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
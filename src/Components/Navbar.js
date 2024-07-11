import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed h-35 top-0 left-0 w-full flex justify-between overflow-hidden px-8 bg-blue-500 z-50">
      <div className="text-white text-2xl font-bold">
        <h1 className='h-14 px-3 py-3'>ABHI ESTATES</h1>
        {/* <img src={} alt='logo' style={} /> */}
      </div>
      <ul className="flex py-3 px-3 space-x-6 text-white ">

        <li><Link to="/" className="hover:text-gray-300 ">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

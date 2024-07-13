import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="my-6 mx-auto w-full max-w-lg relative">
      <input 
        type="text" 
        placeholder="Search by location (e.g., Madhapur, Gachibowli)" 
        value={query} 
        onChange={handleInputChange} 
        className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-full shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default SearchBar;

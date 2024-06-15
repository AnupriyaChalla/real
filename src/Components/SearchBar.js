import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="my-6 mx-auto w-full max-w-lg">
      <input 
        type="text" 
        placeholder="Search by location (e.g., Madhapur, Gachibowli)" 
        value={query} 
        onChange={handleInputChange} 
        className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
  );
}

export default SearchBar;

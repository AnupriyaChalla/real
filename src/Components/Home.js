import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SearchBar from './SearchBar';
import Hero from './Hero';
import ClientStories from './ClientStories';
import Contact from './Contact';


const propertyTypes = ['Residential Land', 'Independent Flat/Villa', 'Apartment'];

function Home() {
  const [selectedType, setSelectedType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleNextType = () => {
    const nextIndex = (typeIndex + 1) % propertyTypes.length;
    setSelectedType(propertyTypes[nextIndex]);
    setTypeIndex(nextIndex);
  };

  return (
    <div className="p-8 mt-30">
      {!selectedType && <Hero />}
      {!selectedType && (
        <>
          <h1 className="text-3xl mt-20 font-bold mb-6 text-center">Real Estate Listings</h1>
          <SearchBar onSearch={handleSearch} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {propertyTypes.map((type, index) => (
              <div 
                key={index} 
                className="cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                onClick={() => handleTypeSelect(type)}
              >
                <img 
                  src={
                    type === 'Residential Land' ? 'https://rb.gy/d49pe3' :
                    type === 'Independent Flat/Villa' ? 'https://rb.gy/wodcvs' :
                    'https://rb.gy/d49pe3'
                  } 
                  alt={type} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <h2 className="mt-4 text-xl font-bold text-center">{type}</h2>
              </div>
            ))}
          </div>
        </>
      )}
      {selectedType && (
        <>
          <div className="nav-buttons flex justify-between my-4 mt-20">
            <button
              className="back-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setSelectedType(null)}
            >
              Back
            </button>
            <button
              className="next-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleNextType}
            >
              Next
            </button>
          </div>
        </>
      )}
      {!selectedType && (
        <div className="px-8 py-8 pz-8">
          <ClientStories />
        </div>
      )}
      {!selectedType && <Contact />}
    </div>
  );
}

export default Home;

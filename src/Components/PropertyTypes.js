import React from 'react';

const typeImages = {
  'Residential Land': 'https://rb.gy/d49pe3',
  'Independent Flat/Villa': 'https://rb.gy/wodcvs',
  'Apartment': 'https://rb.gy/d49pe3'
};

function PropertyTypes({ types, onSelectType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {types.map((type, index) => (
        <div 
          key={index} 
          className="cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          onClick={() => onSelectType(type)}
        >
          <img src={typeImages[type]} alt={type} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="mt-4 text-xl font-bold text-center">{type}</h2>
        </div>
      ))}
    </div>
  );
}

export default PropertyTypes;

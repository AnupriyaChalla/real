import React from 'react';

function Card({ property, onClick }) {
  return (
    <div
      className="card p-4 border rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
      onClick={() => onClick(property)}
    >
      <h2 className="text-xl font-bold mb-2 text-gray-800">{property.type}</h2>
      <img 
        src={property.image} 
        alt={property.type} 
        className="card-image w-full h-48 object-cover rounded-md mb-2" 
      />
      <p className="text-lg text-gray-700">{property.price}</p>
    </div>
  );
}

export default Card;

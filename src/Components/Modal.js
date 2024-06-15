import React from 'react';

function Modal({ show, onClose, property }) {
  if (!show) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img 
          src={property.image} 
          alt={property.type} 
          className="w-full h-64 object-cover rounded-md mb-4" 
        />
        <h2 className="text-2xl font-bold mb-2">{property.type}</h2>
        <p className="text-lg mb-2"><strong>Title:</strong> {property.title}</p>
        <p className="text-lg mb-2"><strong>Area:</strong> {property.area} sq ft</p>
        <p className="text-lg mb-2"><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p className="text-lg font-bold text-blue-600"><strong>Price:</strong> {property.price}</p>
      </div>
    </div>
  );
}

export default Modal;

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

      </div>
    </div>
  );
}

export default Modal;

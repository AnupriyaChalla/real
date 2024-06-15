import React from 'react';
import Navbar from './Navbar';

function EmptyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <h1>Empty Page</h1>
      </div>
    </div>
  );
}

export default EmptyPage;

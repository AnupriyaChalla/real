
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const AdHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard'); // Example initial selection
  
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex h-full ">
      {/* Left Sidebar */}
      <Sidebar selectedMenuItem={selectedMenuItem} onMenuItemClick={handleMenuItemClick} />
      
      {/* Right Content */}
      <Content selectedMenuItem={selectedMenuItem} />
    </div>
  );
};

export default AdHome;


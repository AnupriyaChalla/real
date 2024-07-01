// Content.js
import React from 'react';
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
import SettingsContent from './SettingsContent';
import MessagesContent from './MessagesContent';
import PropertyList from './PropertyList';
//import ResiList from './ResiList';
const Content = ({ selectedMenuItem }) => {
  // Example content for each menu item
  const getContent = () => {
    switch (selectedMenuItem) {
      case 'Dashboard':
        return <DashboardContent/>;
      case 'Profile':
        return <ProfileContent/>;
      case 'Settings':
        return <SettingsContent />;
      case 'Messages':
        return <MessagesContent />;
      case 'Propertylist':
        return <PropertyList/>;
     
      default:
        return <DashboardContent />; // Default content
    }
  };

  return (
    <div className="flex-1 p-4">
      {getContent()}
    </div>
  );
};








export default Content;

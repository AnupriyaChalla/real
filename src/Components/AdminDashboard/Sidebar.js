// Sidebar.js
import React from 'react';
import classNames from 'classnames';


const Sidebar = ({ selectedMenuItem, onMenuItemClick }) => {
  const menuItems = ['Dashboard', 'Profile', 'Settings', 'Messages','Propertylist','Residential','Apartments']; // Example menu items
  
  return (
    <div className="bg-blue-500 text-white w-48 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer py-2 gap-4 px-4 hover:bg-blue-500 transition-colors" 
                onClick={() => onMenuItemClick(item)} className={classNames('py-2 px-4 hover:bg-gray-700 transition-colors', {
                  'bg-gray-900': selectedMenuItem === item,
                })}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '7337505390';

  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      onClick={openWhatsAppChat}
    >
      WhatsApp
    </button>
    
  );
};

export default WhatsAppButton;

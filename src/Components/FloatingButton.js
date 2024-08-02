import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '9849155800';

  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: '#25D366', cursor: 'pointer' }} onClick={openWhatsAppChat} />
    </div>
  );
};

export default WhatsAppButton;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="min-h-72 bg-blue-950 py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="mt-8 text-center md:text-left">
            <div>
              <span className="text-white font-medium text-lg">
                347 RT colony, SR Nagar, Hyderabad
              </span>
            </div>
            <div className="mt-4">
              <a href="https://wa.me/your-number" className="mr-4">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
              </a>
              <a href="mailto:your-email@example.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#DB4437' }} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-4">Legal Services</h3>
            <ul className="text-white space-y-2">
              <li>Documentation</li>
              <li>Registration</li>
              <li>Loans Approval</li>
              <li>A-Z Work</li>
            </ul>
          </div>
          <div className="mt-8 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
            <ul className="text-white space-y-2" style={{ listStyleType: 'none' }}>
              <li>Home</li>
              <li>Properties</li>
              <li>About</li>
              <li>Contact</li>
              <li>Clients Stories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

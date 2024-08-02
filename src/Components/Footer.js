import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="min-h-72 bg-blue-950 py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-10">
          <div className="mt-8 text-center md:text-left">

            <div>
              <div>
              <span className="text-white font-medium text-2xl"> ABHI ESTATES</span>
              </div>
              <div className='mt-4'>
              <span className="text-white font-medium text-lg ">
              SRT 347 , Sanath Nagar, Hyderabad

              </span>
              </div>
            </div>
            <div className="mt-3">
              <a href="https://wa.me/9849155800" className="mr-4">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
              </a>
              <a href="mailto:realestates5800@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#DB4437' }} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left ">
            <h3 className="text-white font-bold text-xl mb-4">Legal Services</h3>
            <ul className="text-white space-y-2">
              <li className='hover:underline'>Documentation</li>
              <li className='hover:underline'>Registration</li>
              <li className='hover:underline'>Loans Approval</li>
              <li className='hover:underline'>A-Z Work</li>
            </ul>
          </div>
          <div className="mt-8 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
            <ul className="text-white space-y-2" style={{ listStyleType: 'none' }}>
              <Link to= "/ "className='hover:underline'>Home</Link><br></br>
              <Link to = "" className='hover:underline'>Properties</Link><br></br>
              <Link  to = "/about"className='hover:underline'>About</Link><br></br>
              <Link  to = "/contact"className='hover:underline'>Contact</Link><br></br>
              <Link to = "/Services"className='hover:underline'>Services</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

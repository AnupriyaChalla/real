import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='min-h-72 bg-blue-950'>
      <div>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          <div className='mt-16'>
            <div>
              <span className='text-white font-medium'>
                347 RT colony ,SR Nagar, Hyderabad
              </span>
            </div>
            <div className='mt-4'>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} className='mr-4' />
              <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#DB4437' }} />
            </div>
          </div>
          <div className='mt-16'>
          
            <ul className='flex justify-center'>
              
              <div className=' text-left    text-white'>
                <li className='font-bold'>Legal services</li>
                <li>Documentation</li>
                <li>Registration</li>
                <li>Loans Approval</li>
                <li>A-Z Work</li></div>
            </ul>

          </div>
         
            <div className='flex justify-center mt-16 text-left p-6 text-white'>
              <ui style={{ listStyleType: 'none' }}>
                
                  <li>Home</li>
                  <li>Properties</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Clients Stories</li>
              </ui>
            </div>

          </div>
        
      </div>
    </div>
  )
}

export default Footer
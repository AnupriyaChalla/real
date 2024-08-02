import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ClientStories from './ClientStories';
import Footer from './Footer';
import owner from '../Assests/owner.jpg';

function AboutPage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        {/* About Section */}
        <div className="p-4 md:p-20 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-6 flex items-center justify-center transform transition-transform mt-3">
              <div className="rounded-full bg-white p-2 md:p-4 shadow-xl transform transition-transform">
                <img
                  src={owner}
                  alt="Owner"
                  className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black p-4 md:p-6 rounded-lg shadow-lg w-full md:w-4/5">
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">Murali Nath</h2>

              {showText && (
                <>
                  <p className="text-sm md:text-lg mb-4">
                 <strong>Murali Nath, over 13 years in real estate, offers residential lands and flats across Hyderabad</strong>. I also provides home loans to facilitate your property purchase.
                  </p>
                  <p className="text-sm md:text-lg mb-4">
                    In addition to selling residential lands and flats, Murali offers comprehensive home loan services to make the buying process smoother for his clients. His commitment to customer satisfaction and his ability to provide tailored financial solutions have earned him a loyal clients.

                  </p>
                  <p>
                  "With a remarkable track record of <strong className='font-sans'>successfully realestated over 100+ properties, Murali has established themselves as a trusted and accomplished professional in the real estate industry</strong>"
                 </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Client Stories Section */}
      <div className="bg-blue-100 py-8">
        <ClientStories />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;

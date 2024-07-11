import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ClientStories from './ClientStories';
import Footer from './Footer';
import owner from '../Assests/owner.jpg'; // Update the path to your image

function AboutPage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        {/* About Section */}
        <div className="p-20 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-6 flex items-center justify-center transform transition-transform hover:scale-105">
              <div className="rounded-full bg-white p-4 shadow-xl transform transition-transform hover:rotate-3 hover:skew-y-3">
                <img
                  src={owner}
                  alt="Owner"
                  className="rounded-full w-40 h-40 object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black p-6 rounded-lg shadow-lg max-w-lg">
              <h2 className="text-2xl font-extrabold mb-2">JOHN SAGE</h2>
              <h3 className="text-xl font-semibold mb-4">REAL ESTATE INVESTOR</h3>
              {showText && (
                <>
                  <p className="text-lg mb-4">
                    John Sage, with over 13 years in real estate, offers residential lands and flats across Hyderabad. He also provides home loans to facilitate your property purchase.
                  </p>
                  <p className="text-lg mb-4">
                    John's portfolio includes a diverse range of properties across Hyderabad, catering to the needs of both first-time buyers and seasoned investors. Whether you're looking for a new home or a valuable investment property, John has the expertise to help you find the perfect match.
                  </p>
                  <p className="text-lg mb-4">
                    In addition to selling residential lands and flats, John offers comprehensive home loan services to make the buying process smoother for his clients. His commitment to customer satisfaction and his ability to provide tailored financial solutions have earned him a loyal clientele.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Client Stories Section */}
      <div className="bg-blue-200 py-8">
        <ClientStories />
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;

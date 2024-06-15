import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ClientStories from './ClientStories';
import owner from '../Assests/owner.jpg'
function AboutPage() {
  const [showText, setShowText] = useState(false);

  // Simulate text loading after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // Clear the timer when the component is unmounted or on rerender
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto py-8"> {/* Container for navbar and about section */}
        {/* About Section */}
        <div className="p-20 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-6 flex items-center justify-center">
              <div className="rounded-full bg-white p-4">
                <img 
                 src={owner}
                  alt="Owner"
                  className="rounded-full w-40 h-40 object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="text-left md:text-left">
              {showText && (
                <>
                  <p className="text-lg">
                    John Doe, with over 13 years in real estate, offers residential lands and flats across Hyderabad. He also provides home loans to facilitate your property purchase.
                  </p>
                  <p>
                    John's portfolio includes a diverse range of properties across Hyderabad, catering to the needs of both first-time buyers and seasoned investors. Whether you're looking for a new home or a valuable investment property, John has the expertise to help you find the perfect match.
                  </p>
                  <p>
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
    </div>
  );
}

export default AboutPage;

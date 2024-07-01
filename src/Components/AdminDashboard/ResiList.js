import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ResiList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/resiget.php'); // Update this URL to your actual endpoint
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Residential Properties</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                {[property.Image1, property.Image2, property.Image3, property.Image4, property.Image5, property.Image6, property.Image7, property.Image8]
                  .filter(image => image) // Filter out null or undefined images
                  .map((image, imgIndex) => {
                    const base64Prefix = image.startsWith('data:') ? '' : `data:image;base64,`;
                    const src = `${base64Prefix}${image}`;
                    return (
                      <div key={imgIndex}>
                        <img
                          src={src}
                          alt={`Property ${property.ID} Image ${imgIndex + 1}`}
                          className="w-full h-48 object-cover"
                          onError={(e) => console.error(`Failed to load image for Property ${property.ID} Image ${imgIndex + 1}`, e)}
                        />
                      </div>
                    );
                  })}
              </Carousel>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{property.Location}</h2>
                <p className="text-gray-700 mb-2">{property.Description}</p>
                <p className="text-gray-800 font-bold">${property.Price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No residential properties found with images.</p>
      )}
    </div>
  );
};

export default ResiList;

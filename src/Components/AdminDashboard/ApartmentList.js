import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/apartget.php');
        setApartments(response.data); // Set apartments from response data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Apartments with Images</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : apartments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map(apartment => (
            <div key={apartment.ID} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                {[apartment.Image1, apartment.Image2, apartment.Image3, apartment.Image4, apartment.Image5, apartment.Image6, apartment.Image7, apartment.Image8]
                  .filter(image => image) // Filter out null or undefined images
                  .map((image, index) => {
                    // Determine the image format
                    const base64Prefix = image.startsWith('data:') ? '' : `data:image;base64,`;
                    const src = `${base64Prefix}${image}`;
                    return (
                      <div key={index}>
                        <img
                          src={src}
                          alt={`Apartment ${apartment.ID} Image ${index + 1}`}
                          className="w-full h-48 object-cover"
                          onError={(e) => console.error(`Failed to load image for Apartment ${apartment.ID} Image ${index + 1}`, e)}
                        />
                      </div>
                    );
                  })}
              </Carousel>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{apartment.Address}</h2>
                <p className="text-gray-700 mb-2">{apartment.Description}</p>
                <p className="text-gray-800 font-bold">${apartment.Price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No apartments found with images.</p>
      )}
    </div>
  );
};

export default ApartmentList;

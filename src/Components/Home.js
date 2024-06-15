import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropertyTypes from './PropertyTypes';
import SearchBar from './SearchBar';
import Hero from './Hero';
import Backgroundimg from './Backgroundimg';
import ClientStories from './ClientStories';
import Contact from './Contact';
const properties = [
  {
    type: 'Residential Land',
    title: 'Beautiful Family House',
    description: 'A beautiful house in the suburbs.',
    price: '$500,000',
    images: [
      'https://shorturl.at/xUlYB',
      'https://shorturl.at/xUlYB',
      'https://shorturl.at/xUlYB'

    ],
    area: '2,500',
    bedrooms: 4,
    location: 'Madhapur'
  },
  {
    type: 'Residential Land',
    title: 'Spacious Garden Villa',
    description: 'A luxurious villa with a spacious garden.',
    price: '$750,000',
    images: [
      'https://via.placeholder.com/300x200?text=Residential+Land+4',
      'https://via.placeholder.com/300x200?text=Residential+Land+5',
      'https://via.placeholder.com/300x200?text=Residential+Land+6'
    ],
    area: '3,200',
    bedrooms: 5,
    location: 'Kondapur'
  },
  {
    type: 'Independent Flat/Villa',
    title: 'Modern Apartment',
    description: 'A modern apartment in the city center.',
    price: '$350,000',
    images: [
      'https://rb.gy/wodcvs',
      'https://rb.gy/d49pe3',
      'https://rb.gy/wodcvs'
    ],
    area: '1,200',
    bedrooms: 2,
    location: 'Banjara Hills'
  },
  {
    type: 'Independent Flat/Villa',
    title: 'Luxury Penthouse',
    description: 'A luxurious penthouse with stunning views.',
    price: '$900,000',
    images: [
      'https://rb.gy/d49pe3',
      'https://rb.gy/d49pe3',
      'https://rb.gy/wodcvs'
    ],
    area: '2,000',
    bedrooms: 3,
    location: 'Jubilee Hills'
  },
  {
    type: 'Apartment',
    title: 'City Center Apartment',
    description: 'A cozy apartment with great views.',
    price: '$400,000',
    images: [
      'https://via.placeholder.com/300x200?text=Apartment+1',
      'https://via.placeholder.com/300x200?text=Apartment+2',
      'https://via.placeholder.com/300x200?text=Apartment+3'
    ],
    area: '1,500',
    bedrooms: 3,
    location: 'Gachibowli'
  },
  {
    type: 'Apartment',
    title: 'Executive Studio',
    description: 'A stylish studio apartment in a prime location.',
    price: '$300,000',
    images: [
      'https://via.placeholder.com/300x200?text=Apartment+4',
      'https://via.placeholder.com/300x200?text=Apartment+5',
      'https://via.placeholder.com/300x200?text=Apartment+6'
    ],
    area: '1,000',
    bedrooms: 1,
    location: 'Hi-Tech City'
  },
  {
    type: 'Apartment',
    title: 'Executive Studio',
    description: 'A stylish studio apartment in a prime location.',
    price: '$300,000',
    images: [
      'https://via.placeholder.com/300x200?text=Apartment+4',
      'https://via.placeholder.com/300x200?text=Apartment+5',
      'https://via.placeholder.com/300x200?text=Apartment+6'
    ],
    area: '1,000',
    bedrooms: 1,
    location: 'Hi-Tech City'
  },
  {
    type: 'Apartment',
    title: 'City Center Apartment',
    description: 'A cozy apartment with great views.',
    price: '$400,000',
    images: [
      'https://via.placeholder.com/300x200?text=Apartment+7',
      'https://via.placeholder.com/300x200?text=Apartment+8',
      'https://via.placeholder.com/300x200?text=Apartment+9'
    ],
    area: '1,500',
    bedrooms: 3,
    location: 'Gachibowli'
  }
];

const propertyTypes = [...new Set(properties.map(property => property.type))];

function Home() {
  const [selectedType, setSelectedType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProperties = properties
    .filter(property => property.type === selectedType)
    .filter(property => property.location.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleNextType = () => {
    const nextIndex = (typeIndex + 1) % propertyTypes.length;
    setSelectedType(propertyTypes[nextIndex]);
    setTypeIndex(nextIndex);
  };

  return (
    <div className="p-8 mt-30">
      <Hero/>
      
      <h1 className="text-3xl mt-20 font-bold mb-6 text-center">Real Estate Listings</h1>
      <SearchBar onSearch={handleSearch} />
      {!selectedType ? (
        <PropertyTypes types={propertyTypes} onSelectType={handleTypeSelect} />
      ) : (
        <>
          <div className="nav-buttons flex justify-between my-4">
            <button 
              className="back-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setSelectedType(null)}
            >
              Back
            </button>
            <button 
              className="next-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleNextType}
            >
              Next
            </button>
          </div>
          <div className="property-details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <div key={index} className="property-card bg-white p-4 rounded-lg shadow-lg">
                <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
                  {property.images.map((image, idx) => (
                    <div key={idx}>
                      <img src={image} alt={`${property.title} ${idx + 1}`} className="rounded-md" />
                    </div>
                  ))}
                </Carousel>
                <div className="property-info mt-4">
                  <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                  <p><strong>Type:</strong> {property.type}</p>
                  <p><strong>Description:</strong> {property.description}</p>
                  <p><strong>Area:</strong> {property.area} sq ft</p>
                  <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                  <p><strong>Location:</strong> {property.location}</p>
                  <p className="text-lg font-bold text-blue-500"><strong>Price:</strong> {property.price}</p>
                </div>
              </div>
            ))}
          
          </div>
        </>
      )}
      
       <div className="px-8 py-8 pz-8">
      <ClientStories/>
      </div>
      <Contact/>
    </div>
  );
}

export default Home;

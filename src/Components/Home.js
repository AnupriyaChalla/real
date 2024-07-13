import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchBar from './SearchBar';
import Hero from './Hero';
import ClientStories from './ClientStories';
import Contact from './Contact';
import useIntersectionObserver from './useIntersectionObserver';
import resipic from '../Assests/1.jpg'; // Ensure this path is correct
import apar from '../Assests/apar.png'; // Ensure this path is correct
import villa from '../Assests/5.jpg'; // Ensure this path is correct

const propertyTypes = [
  { name: 'Residential Land', path: '/residentialList', src: resipic },
  { name: 'Independent Flat/Villa', path: '/flatList', src: villa },
  { name: 'Apartment', path: '/apartmentList', src: apar },
];

function Home() {
  const [cardRefs, cardsInView] = useIntersectionObserver({
    threshold: 0.1,
    multiple: propertyTypes.length,
  });

  return (
    <div className="p-8 mt-30">
      <Hero />
      <h1 className="text-3xl mt-20 font-bold mb-6 text-center">
        Real Estate Listings
      </h1>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {propertyTypes.map((type, index) => (
          <Link key={index} to={type.path}>
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ${
                cardsInView.includes(cardRefs.current[index])
                  ? index === 0
                    ? 'animate-slideInLeftFromMiddle'
                    : index === 2
                    ? 'animate-slideInRightFromMiddle'
                    : 'animate-fadeIn'
                  : 'opacity-0'
              }`}
            >
              <img
                src={type.src}
                alt={type.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="mt-4 text-xl font-bold text-center">{type.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="px-8 py-8">
        <ClientStories />
      </div>
      <Contact />
    </div>
  );
}

export default Home;

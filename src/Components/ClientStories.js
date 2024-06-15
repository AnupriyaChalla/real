import React, { useState, useEffect } from 'react';

const clientStories = [
  {
    image:"https://shorturl.at/6HW8Q",
    text: "Dwell Properties helped me find my dream home in no time! Their service is excellent and they truly care about their clients.",
    name: "Doe, CA",
  },
  {
    image:"https://shorturl.at/E27mO",
    text: "Thanks to Dwell Properties, I secured a great investment property. The team is professional and very knowledgeable.",
    name: "Smith, TX",
  },
  {
    image:"https://shorturl.at/E27mO",
    text: "Buying my first home was a breeze with Dwell Properties. They provided amazing support throughout the process.",
    name: "Alice Johnson, NY",
  },
  {
    image:"https://shorturl.at/6HW8Q",
    text: "The experience with Dwell Properties was top-notch. They found me the perfect home and handled all the paperwork effortlessly.",
    name: "Michael Brown, FL",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % clientStories.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  
  return (
   
    
    <div className="relative z-10">
      
      <main className="container mx-auto mt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue">CLIENTS STORIES</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img
                src={clientStories[currentSlide].image}
                alt={clientStories[currentSlide].name}
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {clientStories[currentSlide].text}
            </p>
            <p className="text-gray-400 font-semibold mb-2">
              {clientStories[currentSlide].name}
            </p>
            <div className="flex items-center justify-center space-x-2">
              {clientStories.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  
  );
}

export default App;

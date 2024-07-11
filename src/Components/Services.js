import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function ServicePage() {
  const [selectedService, setSelectedService] = useState('');
  const [testimonialText, setTestimonialText] = useState('');
  const [testimonialAuthor, setTestimonialAuthor] = useState('');
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      text: "Thanks to the exceptional service, I secured my home loan effortlessly. The team guided me through every step, making the process stress-free.",
      author: "John Doe"
    },
    {
      id: 2,
      text: "Their registration services are top-notch. I didn't have to worry about a thing. Highly recommended for anyone looking to buy a home!",
      author: "Jane Smith"
    },
    {
      id: 3,
      text: "Professional, efficient, and reliable. They made the whole process of getting a home loan smooth and quick.",
      author: "Michael Johnson"
    }
  ]);

  const navigate = useNavigate();

  const handleCardClick = (service) => {
    setSelectedService(service);
    navigate('/contact');
  };

  const handleTestimonialInputChange = (e) => {
    setTestimonialText(e.target.value);
  };

  const handleTestimonialAuthorChange = (e) => {
    setTestimonialAuthor(e.target.value);
  };

  const handleTestimonialSubmit = () => {
    const newId = testimonials.length + 1;
    const newTestimonial = {
      id: newId,
      text: testimonialText,
      author: testimonialAuthor || "Anonymous"
    };
    setTestimonials([...testimonials, newTestimonial]);
    setTestimonialText('');
    setTestimonialAuthor('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <div className="relative w-full mb-8 overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://rb.gy/cmbns5"
            alt="Services"
            className="object-cover object-center w-full h-96"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center z-10">Our Services</h1>
          </div>
        </div>
        
        <div className="text-lg mb-8 text-center max-w-3xl">
          We provide comprehensive home loan and registration services, assisting you from the ground work to the final paperwork. Our dedicated team ensures a smooth and hassle-free process, making your dream home a reality.
        </div>

        <div className="flex space-x-4 mb-8">
          <div onClick={() => handleCardClick('Registrations')} className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold">Registrations</h2>
            <p className="mt-2">We handle all the registration processes for your new home.</p>
          </div>
          <div onClick={() => handleCardClick('Home Loans')} className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold">Home Loans</h2>
            <p className="mt-2">Get the best home loan deals with our expert guidance.</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="flex justify-center space-x-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md border border-indigo-500 transform hover:scale-105 transition-transform duration-300">
                <p className="italic">{`"${testimonial.text}"`}</p>
                <p className="mt-4 text-right">{`- ${testimonial.author}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;

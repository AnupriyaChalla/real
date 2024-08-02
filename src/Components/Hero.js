import React, { useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ 
      backgroundImage: "url('https://rb.gy/d49pe3')" ,
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      imageRendering: 'auto'
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Navbar />
      <div className="relative  flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="lg:text-5xl font-bold sm:text-2xl md:text-2xl animate-fadeInDown animation-delay-1">New Properties</h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-2xl animate-fadeInDown animation-delay-2">EXCLUSIVELY BY ABHI ESTATES</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-3xl w-full">
          <div className="flex justify-end">
            <button onClick={closeModal} className="text-white">Close</button>
          </div>
          <div className="mt-4">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Hero;

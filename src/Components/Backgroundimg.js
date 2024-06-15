import React from 'react'
import BackgroundImg from '../Assests/BackgroundImg.jpg';
function Backgroundimg() {
  return (
    <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          zIndex: '-1', // Move the background image behind the client stories section
        }}
      ></div>
  )
}

export default Backgroundimg

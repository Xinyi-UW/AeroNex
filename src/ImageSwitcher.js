// Inside src/ImageSwitcher.js
import React, { useState } from 'react';

const ImageSwitcher = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    // Cycle through the provided images
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <img 
      src={images[currentImageIndex]} 
      alt="Switchable Image" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', width: '100%', height: '700px', objectFit: 'cover' }}

    />
  );
};

export default ImageSwitcher;

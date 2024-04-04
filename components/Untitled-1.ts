// CarGallery.js

import { useEffect, useState } from 'react';
import { fetchCarImages } from '../services/unsplashService';

const CarGallery = () => {
  const [carImages, setCarImages] = useState([]);

  useEffect(() => {
    const getCarImages = async () => {
      const images = await fetchCarImages();
      setCarImages(images);
    };
    getCarImages();
  }, []);

  return (
    <div>
      <h1>Car Gallery</h1>
      <div className="image-grid">
        {carImages.map((image) => (
          <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default CarGallery;

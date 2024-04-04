// CarComponent.tsx
"use client"
import { fetchCarImage } from '@/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';


interface CarData {
  make: string;
  year: number;
}

const CarComponent: React.FC<{ carData: CarData }> = ({ carData }) => {
  const [carImage, setCarImage] = useState<string | null>(null);
  console.log("carImage==",carImage)

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await fetchCarImage(carData);
      setCarImage(imageUrl);
    };

    fetchImage();
  }, [carData]);

  return (
    <>
    <div>
      <h2>{carData.make} {carData.year}</h2>
      {/* <Image src={carImage} alt={`${carData.make} ${carData.model}`} width={50} height={50}/> */}
      {/* {carImage && } */}
      {/* Render other car data */}
    </div>
    </>

    
  );
};

export default CarComponent;

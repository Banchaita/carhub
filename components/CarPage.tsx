"use client"

// CarPage.tsx

import CarComponent from './CarComponent';

const CarPage: React.FC = () => {
  const carData = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    // Other car data
  };

  return (
    <div>
      <h1>Car Details</h1>
      <CarComponent carData={carData} />
    </div>
  );
};

export default CarPage;


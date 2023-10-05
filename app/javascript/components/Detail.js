import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const tripPackage = useSelector((state) => state.tripPackages.selectedTripPackage);
  console.log(tripPackage);
  return (
    <div>
      <h1>HELLO WORLD IN DETAIL</h1>
    </div>
  );
};

export default Detail;

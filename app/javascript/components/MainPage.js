import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTripPackagesAsync } from '../redux/tripPackageSlice';
import Item from './Item';
import { useParams, Link } from 'react-router-dom';
import NavPanel from './NavPanel';

const MainPage = () => {
  const dispatch = useDispatch();
  const tripPackages = useSelector((state) => state.tripPackages.tripPackages);
  
  useEffect(() => {
      dispatch(fetchTripPackagesAsync());
  }, [dispatch]);

  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id && tripPackages) {
      const selected = tripPackages.find((item) => item.id === Number(id));
      setSelectedItem(selected || null);
    }
  }, [id, tripPackages]);


  const heatMap = () => (
    <div className="heatmap__message">
      <p>No trip packages available at the moment.</p>
    </div>
  );

  return (
    <div className='main-container'>
      <NavPanel />
      <div className="items">
        <div className="items__header">
          <h1>Our Services</h1>
          <p>Please select a service.</p>
        </div>
        <div className="items__Lists">
          {tripPackages && tripPackages.length
            ? tripPackages.map((tripPackage) => (
                <Item
                  key={tripPackage.id}
                  item={tripPackage}
                  onClick={() =>{ setItem(tripPackage)}}
                />
              ))
            : heatMap()}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

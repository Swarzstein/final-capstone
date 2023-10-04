import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTripPackagesAsync } from '../redux/tripPackageSlice';
import Item from './Item';
// import { setSelectedTripPackage } from '../redux/tripPackageSlice';
import { useParams, Link } from 'react-router-dom';

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

  const setItem = (tripPackage) => {
    console.log("dispatching")
    dispatch(setSelectedItem(tripPackage));
  }

  const heatMap = () => (
    <div className="heatmap__message">
      <p>No trip packages available at the moment.</p>
    </div>
  );

  return (
    <>
      <div className="items">
        <div className="items__header">
          <h1>Our Services</h1>
          <p>Please select a service.</p>
        </div>
        <div className="items__Lists">
          {tripPackages && tripPackages.length
            ? tripPackages.map((tripPackage) => (
                // <Link key={tripPackage.id} to={`/detail/${tripPackage.id}`}>
                  <Item
                    key={tripPackage.id}
                    item={tripPackage}
                    onClick={ setItem(tripPackage)}
                  />
                // </Link>
              ))
            : heatMap()}
        </div>
      </div>

      {/* {selectedItem && (
        <div className="selected-item-details">
          <img src={selectedItem.image_url} alt={selectedItem.name} />
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <p>Country: {selectedItem.country}</p>
          <p>Price: {selectedItem.price}</p>
        </div>
      )} */}
    </>
  );
};

export default MainPage;


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTripPackages } from '../api/apiUrl'
import Item from './Item';
import { setTripPackages } from '../redux/tripPackageSlice';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();
  const tripPackages = useSelector((state) => state.tripPackage.tripPackages);

  useEffect(() => {
    fetchTripPackages().then((response) => {
      dispatch(setTripPackages(response.data));
    });
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
    <>
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
                  onClick={() => setSelectedItem(tripPackage)}
                />
              ))
            : heatMap()}
        </div>
      </div>

      {selectedItem && (
        <div className="selected-item-details">
          <img src={selectedItem.image} alt={selectedItem.name} />
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <p>Country: {selectedItem.country}</p>
          <p>Price: {selectedItem.price}</p>
        </div>
      )}
    </>
  );
};

export default MainPage;

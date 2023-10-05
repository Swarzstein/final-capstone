import React from "react";
import NavPanel from "./NavPanel";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Details = () => {

  const tripPackages = useSelector((state) => state.tripPackages.tripPackages);
  const params = useParams();
  const tripPakage = tripPackages.find((item) => item.id === Number(params.id));

  return (
    <div className="main-container">
      <NavPanel />
      <div className="pack-details">
        <div className="trip-pack-img-container">
          <img src={tripPakage.image_url} alt="trip" />
        </div>
        <div className="details-container">
          <div className="details">
            <div className="name-container">
              <h1>{tripPakage.name}</h1>
            </div>
            <table className="cesc-table">
              <tr>
                <td>Country:</td>
                <td>{tripPakage.country}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{tripPakage.price}$</td>
              </tr>
            </table>
            <div>
              <p className="description">{tripPakage.description}</p>
            </div>
          </div>
          <button className="reserve-btn">Reserve</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
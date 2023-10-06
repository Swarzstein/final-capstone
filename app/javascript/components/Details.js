import React from "react";
import NavPanel from "./NavPanel";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { BsCaretLeft } from "react-icons/bs";


const Details = () => {

  const tripPackages = useSelector((state) => state.tripPackages.tripPackages);
  const params = useParams();
  const tripPakage = tripPackages.find((item) => item.id === Number(params.id));

  return (
    <div className="main-container">
      <NavPanel />
      <div className="pack-details">
        <div className="trip-pack-container">
          <div className="trip-pack-img-container">
            <img src={tripPakage.image_url} alt="trip" />
          </div>
          <button className="back-btn"><BsCaretLeft /> </button>
        </div>
        <div className="details-container">
          <div className="details">
            <div className="name-container">
              <h1>{tripPakage.name}</h1>
            </div>
            <table className="cesc-table">
              <tr className="shadow-r">
                <td className="tl">Country:</td>
                <td className="tr">{tripPakage.country}</td>
              </tr>
              <tr>
                <td className="tl">Price:</td>
                <td className="tr">{tripPakage.price}$</td>
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
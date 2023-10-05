import React from "react";
import NavPanel from "./NavPanel";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Details() {
  // const tripPackages = [
  //   {
  //     id: 1,
  //     name: "Los Roques Dream Vacation", 
  //     country: "Venezuela", 
  //     price: 100, 
  //     description: "Special Tour in the Beaches of Los Roques Venezuela, 5 days 4 nights, includes: all meals, stay, drinks, and transportation from the airport to the hotel, with different activities to do in the beach, like snorkeling, diving, and more",
  //     image_url: "https://ospreyexpeditions.com/wp-content/uploads/2021/03/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Nyungwe Forest National Park",
  //     country: "Rwanda",
  //     price: 200,
  //     description: "Nyungwe Forest National Park is a national park in southwestern Rwanda, located south of Lake Kivu on the border with Burundi. The park was established in 2004 and covers an area of approximately 970 km² of rainforest, bamboo, grassland, swamps, and bogs.",
  //     image_url: "https://www.rwandagorilla.com/wp-content/uploads/2018/10/nyungwe-forest-national-park.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "China's Great Wall Tour",
  //     country: "China",
  //     price: 300,
  //     description: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
  //     image_url: "https://www.chinahighlights.com/image/2012/10/5c4f0d4f4a9a4a0e8b8b45f0.jpg",
  //   }
  // ]

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

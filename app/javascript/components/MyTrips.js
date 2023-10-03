import React from "react";
import NavPanel from "./NavPanel";

export default function MyTrips() {
  return (
    <div className="main-container">
      <NavPanel />
      <div>
        <h1>My Trips</h1>
        <h3>Here you can see all your trips</h3>
      </div>
    </div>
  );
}
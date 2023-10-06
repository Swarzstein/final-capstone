import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialPinterest, TiSocialTwitter, TiSocialVimeo } from "react-icons/ti";


const NavPanel = () => {
  return (
    <div className="h-nav-bar">
      <div className="logo">
        <h1>Travel Planner</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/trip_plans" className="nav-link">Trip Plans</Link>
        <Link to="/reserve" className="nav-link">Reserve</Link>
        <Link to="/my_reservations" className="nav-link">My Reservations</Link>
        <Link to="/add_trip" className="nav-link">Add Trip Plan</Link>
        <Link to="/delete_trip" className="nav-link">Delete Trip Plan</Link>
      </nav>
      <div className="social-media">
        <Link to="https://twitter.com/" ><TiSocialTwitter /></Link>
        <Link to="https://facebook.com/" ><TiSocialFacebook /></Link>
        <Link to="https://plus.google.com/" ><TiSocialGooglePlus /></Link>
        <Link to="https://vimeo.com/" ><TiSocialVimeo /></Link>
        <Link to="https://pinterest.com/" ><TiSocialPinterest /></Link>
      </div>
    </div>
  );
}

export default NavPanel;

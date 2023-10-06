import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialPinterest, TiSocialTwitter, TiSocialVimeo } from "react-icons/ti";


const NavPanel = () => {
  return (
    <div className="h-nav-bar">
      <div className="logo">
        <h1>Travel Planner</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link" activeClassName="active">Trip Plans</NavLink>
        <NavLink to="/reserve" className="nav-link" activeClassName="active">Reserve</NavLink>
        <NavLink to="/my_reservations" className="nav-link" activeClassName="active">My Reservations</NavLink>
        <NavLink to="/add_trip" className="nav-link" activeClassName="active">Add Trip Plan</NavLink>
        <NavLink to="/delete_trip" className="nav-link" activeClassName="active">Delete Trip Plan</NavLink>
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

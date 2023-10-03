import React from "react";
import { Link } from "react-router-dom";

export default function NavPanel() {
  return (
    <div className="h-nav-bar">
      <div className="logo">
        <h1>Travel Planner</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sign_up" className="nav-link">Sign Up</Link>
        <Link to="/sign_in" className="nav-link">Sign In</Link>
        <Link to="/add_trip" className="nav-link">Add Trip Plan</Link>
      </nav>
    </div>
  );
}
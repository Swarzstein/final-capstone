import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddItemForm from './AddItemForm';

export default function NavPanel() {

  const [showAddItemForm, setShowAddItemForm] = useState(false);

  const handleAddItemLinkClick = () => {
    setShowAddItemForm(true);
  };

  const handleFormSubmit = (itemData) => {
    // Handle form submission (you can send data to your backend or update state)
    console.log('Item data submitted:', itemData);
    // After submitting, hide the form
    setShowAddItemForm(false);
  };

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
        {/* <Link to="/add_trip" className="nav-link">Add Trip Plan</Link> */}

        <Link to="/add_trip" className="nav-link">
          Add Trip Plan
        </Link>
        <Link to="/delete_trip" className="nav-link">Delete Trip Plan</Link>
      </nav>
      {showAddItemForm && (
        <AddItemForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
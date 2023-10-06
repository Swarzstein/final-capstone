import React, { useState } from 'react';
import './AddItem.css';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [itemcountry, setItemcountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: itemImage,
      country: itemcountry,
    }));

    setItemName();
    setItemDescription('');
    setItemPrice('');
    setItemcountry(''),
    setItemImage('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Trip_Pakage Name:
        <input
          type="text"
          value={Trip_PakageName}
          onChange={(e) => setTrip_PakageName(e.target.value)}
        />
      </label>
      <br />

      <label>
      Trip_Pakage Description:
        <textarea
          value={Trip_PakageDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
      </label>
      <br />

      <label>
      Trip_Pakage Price:
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </label>
      <br />

      <label>
      Trip_Pakage Image_URL:
        <input
          type="text"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
        />
      </label>
      <br />

      <label>
      Country:
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </label>
      <br />

      <button type="submit" value="Submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;

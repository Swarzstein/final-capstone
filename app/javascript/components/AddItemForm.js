import React, { useState } from 'react';
import './AddItem.css';

const AddItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: itemImage, // Include image in the submitted data
    });
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemImage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Trip_Pakage Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <br />

      <label>
      Trip_Pakage Description:
        <textarea
          value={itemDescription}
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

      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;

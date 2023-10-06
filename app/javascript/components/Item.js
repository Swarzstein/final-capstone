import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, name, description, image_url, country, price } = item;

  return (
    <Link to={`details/${id}`} >
      <div className="item">
          <div className="item__data">
            <figure>
              <img src={image_url} alt={name} />
              <figcaption className="items__data-title">{name}</figcaption>
            </figure>
            <div className="item__details">
              <p>{description}</p>
              <p>Country: {country}</p>
              <p>Price: {price}</p>
            </div>
            <div className="item__socialMedia">
            </div>
          </div>
      </div>
    </Link>
  );
};

export default Item;

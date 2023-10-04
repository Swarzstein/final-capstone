import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';

const Item = ({ item }) => {
  const { id, name, description, image, country, price } = item;

  return (
    <div className="item">
      <Link to={`items/${id}`}>
        <div className="item__data">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="items__data-title">{name}</figcaption>
          </figure>
          <div className="item__details">
            <p>{description}</p>
            <p>Country: {country}</p>
            <p>Price: {price}</p>
          </div>
          <div className="item__socialMedia">
            {/* <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

// Item.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     country: PropTypes.string,
//     price: PropTypes.number,
//   }).isRequired,
// };

export default Item;

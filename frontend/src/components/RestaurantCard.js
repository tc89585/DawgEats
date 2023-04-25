import React from 'react';
import '../styles/RestaurantCard.css';
import { Link } from 'react-router-dom';

function RestaurantCard(props) {
  const item = props.item;
  //console.log(item._id);
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.name} height={200} />
      <div className="description">
      <Link to={`/display-item/${item._id}`} style={{ textDecoration: 'none', color: 'coral', fontSize: 14 }}>
        <h2>{item.name}</h2>
        </Link>
        <div className="container2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/672/373/original/junk-food-cartoon-design-vector.jpg"
            alt="food"
            className="food"
          />
          <h3>{item.cuisine}</h3>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

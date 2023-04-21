import React from 'react';
import NavBar from './NavBar.js';
import Restaurant from './Restaurant.js';
import RestaurantCard from './RestaurantCard.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(prop) {
  /*dummy list for testing purposes*/
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restName: 'Taichi Bubble Tea',
      address: '247 E Broad St, Athens, GA 30601',
      contact: '706-395-6483',
      cuisine: 'asian',
      image:
        'https://lh3.googleusercontent.com/p/AF1QipNrqoDjdkfcLJAIHgqim9ATpX5f0v8zgMVRCRia=s1360-w1360-h1020',
      description: 'A Bubble tea spot',
    },
    {
      id: 2,
      restName: 'sdfgdsgs',
      address: '247 E Broad St, Athens, GA 30601',
      contact: '706-395-6483',
      cuisine: 'asian',
      image:
        'https://lh3.googleusercontent.com/p/AF1QipNrqoDjdkfcLJAIHgqim9ATpX5f0v8zgMVRCRia=s1360-w1360-h1020',
      description: 'A Bubble tea spot',
    },
    {
      id: 3,
      restName: 'agsaasgad',
      address: '247 E Broad St, Athens, GA 30601',
      contact: '706-395-6483',
      cuisine: 'asian',
      image:
        'https://lh3.googleusercontent.com/p/AF1QipNrqoDjdkfcLJAIHgqim9ATpX5f0v8zgMVRCRia=s1360-w1360-h1020',
      description: 'A Bubble tea spot',
    },
  ]);

  const handleRemoveCard = (id) => {
    let updatedList = restaurants.filter(
      (restaurant) => !(restaurant.id === id)
    );
    setRestaurants(updatedList);
  };

  return (
    <div className="home-page">
      <NavBar />
      {prop.isLoggedIn ? (
        <div>
          <Link to="/create-item">
            <img
              src="../images/plus-icon.svg"
              alt="plus icon"
              id="plus-icon"
              style={{ width: 30, height: 30, cursor: 'pointer' }}
            />
          </Link>
          <span>Add New</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="grid">
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard item={restaurants[index]} />;
        })}
      </div>
    </div>
  );
}

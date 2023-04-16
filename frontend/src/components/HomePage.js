import React from 'react';
import NavBar from './NavBar.js';
import Restaurant from './Restaurant.js';
import { useState } from 'react';

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  /*call back function to delete a Card...
    button will be clicked, this will be called.
  */
  const handleRemoveCard = (id) => {
    let updatedList = restaurants.filter(
      (restaurant) => !(restaurant.id === id)
    );
    setRestaurants(updatedList);
  };

  return (
    <div className="home-page">
      <NavBar />
      <img
        src="./plus-icon.svg"
        alt="plus icon"
        id="plus-icon"
        style={{ width: 30, height: 30, cursor: 'pointer' }}
      />
      <span>Add New</span>
      <div className="grid">
        {restaurants.map((restaurant) => {
          return (
            <Restaurant
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              description={restaurant.description}
              onClick={() => handleRemoveCard(restaurant.id)}
            />
          );
        })}
      </div>
    </div>
  );
}


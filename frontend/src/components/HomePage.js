import React from 'react';
import NavBar from './NavBar.js';
import Restaurant from './Restaurant.js';
import { useState } from 'react';

export default function HomePage() {
  /*dummy list for testing purposes*/
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Michelle's Kitchen",
      description: 'We make the best greek food',
      image: '',
    },
    {
      id: 2,
      name: 'Torinio',
      description: 'Come check out our colombian food.',
      image: '',
    },
    {
      id: 3,
      name: 'Kavytchu',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 4,
      name: 'tejeeeee',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 5,
      name: 'jiukr',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 6,
      name: '54weg',
      description: 'Best jamaican food in town!',
      image: '',
    },

    {
      id: 7,
      name: 'cxzvcz',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 8,
      name: 'g3fraa',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 9,
      name: 'gerwfa',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 10,
      name: 'gwrg',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 11,
      name: 'fga',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 12,
      name: 'rfasgytchu',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 13,
      name: 'adfsdtchu',
      description: 'Best jamaican food in town!',
      image: '',
    },
    {
      id: 14,
      name: 'safdsf',
      description: 'Best jamaican food in town!',
      image: '',
    },
  ]);

  /*const restaurantsArray = [
    {
      id: 1,
      name: "Michelle's Kitchen",
      description: 'We make the best greek food',
      image: '',
    },
    {
      id: 2,
      name: 'Torinio',
      description: 'Come check out our colombian food.',
      image: '',
    },
    {
      id: 3,
      name: 'Kavytchu',
      description: 'Best jamaican food in town!',
      image: '',
    },
  ]; */

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

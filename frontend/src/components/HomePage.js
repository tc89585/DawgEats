//import React from 'react';
import NavBar from './NavBar.js';
import Restaurant from './Restaurant.js';
import RestaurantCard from './RestaurantCard.js';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {
  /*dummy list for testing purposes*/
  const [restaurants, setRestaurants] = useState([]);
  const[userId, setId] = useState();

    useEffect(() => {
      axios
        .get("http://localhost:3001/api/restaurants/")
        .then((res) => {
          setRestaurants(res.data);
        })
        .catch((err) => {
          console.log('Error from HomePage');
        });
    }, []);

    const[token, setToken] = useState();
  
  
    useEffect(() =>{

      const fetchData = async () => {
         setToken(localStorage.getItem("auth-token"));
        await setId(localStorage.getItem("auth-Id"));
      }
      fetchData();
    }, []);
    

  //const handleRemoveCard = (id) => {
   // let updatedList = restaurants.filter(
   //   (restaurant) => !(restaurant.id === id)
  //  );
  //  setRestaurants(updatedList);
 // };
//console.log(prop);
  return (
    <div className="home-page">

      <NavBar />
      {token ? (
        <div>
          <Link to={`/create-item/${userId}`}>
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

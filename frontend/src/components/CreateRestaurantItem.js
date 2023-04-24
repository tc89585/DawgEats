import React, { useState } from 'react';
import '../styles/FormStyleSheet.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';
import '../styles/FormStyleSheet.css';
import axios from 'axios';

function CreateRestaurantItem(props) {
  const [item, setItem] = useState({
    name: '',
    address: '',
    contact: '',
    cuisine: '',
    imageUrl: '',
    description: '',
  });

  const { userId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };


  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/api/restaurants/create-restaurant/${userId}`, item)
      .then((res) => {
        setItem({
          name: '',
          address: '',
          contact: '',
          cuisine: '',
          imageUrl: '',
          description: '',
        });

        // Push to /
        navigate(`/show-item/${userId}`);
      })
      .catch((err) => {
        console.log('Error in CreateRestaurant!');
      });
  };

  return (
    <div class="CreateRestaurantItem">
      <NavBar />
      <div className=" container">
        <div className="header">
          <div className="updateRest">
            <h5> New Restaurant</h5>
          </div>

          <div className="back-image">
            <Link to={`/show-item/${userId}`}>
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg"
                alt="back"
                className="BackImg"
              />
            </Link>
          </div>
        </div>
        <div className="form">
          <form noValidate onSubmit={onSubmit}>
            <div className="wrapper">
              <label> Name of Restaurant</label>
              <input
                value={item.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter Restaurant name"
                required
              />
            </div>
            <div className="wrapper">
              <label> Address</label>
              <input
                value={item.address}
                name="address"
                onChange={handleChange}
                type="text"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="wrapper">
              <label> Contact Number </label>
              <input
                value={item.number}
                name="number"
                onChange={handleChange}
                type="text"
                placeholder="XXX-XXX-XXXX"
                required
              />
            </div>
            <div className="wrapper">
              <label> Cuisine </label>
              <input
                value={item.cuisine}
                name="cuisine"
                onChange={handleChange}
                type="text"
                placeholder="Enter Cuisine"
                required
              />
            </div>

            <div className="wrapper">
              <label> Profile Image Url </label>
              <input
                value={item.imageUrl}
                onChange={handleChange}
                name="imageUrl"
                type="text"
                placeholder="Enter image url"
                required
              />
            </div>
            <div className="wrapper">
              <label> Description </label>
              <textarea
                value={item.description}
                name="description"
                onChange={handleChange}
                type="text"
                placeholder="Enter Description ..."
                required
              />
            </div>

            <div className="but">
              <button className="sub" type="submit">
                  Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRestaurantItem;

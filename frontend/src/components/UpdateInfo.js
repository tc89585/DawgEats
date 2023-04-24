import React, { useState, useEffect } from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import '../styles/FormStyleSheet.css';
import NavBar from './NavBar.js';
import axios from 'axios';

function UpdateInfo(props) {

    const [item, setItem] = useState({
	name: '',
	address: '',
	contact: '',
	cuisine: '',
	image: '',
	description: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
	axios
	    .get(`http://localhost:3001/api/restaurants/restaurant/${id}`)
	    .then((res) => {
		setItem({
      name: res.data.name,
	    address: res.data.address,
	    contact: res.data.number,
	    cuisine: res.data.cuisine,
	    image: res.data.imageUrl,
	    description: res.data.description,
		});
	    })
	    .catch((err) => {
		console.log('Error from Updateinfo');
	    });
    }, [id]);

    
    const handleChange = (e) => {
	setItem({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
	e.preventDefault();

	const data = {
	    name: item.name,
	    address: item.address,
	    number: item.contact,
	    cuisine: item.cuisine,
	    imageUrl: item.image,
	    description: item.description,
	};

  

	axios.put(`http://localhost:3001/api/restaurants/edit-restaurant/${id}`, data)
	    .then((res) => {
		navigate(`/show-item/:id`);
	    })
	    .catch((err) => {
		console.log('Error in UpdateInfo!');
	    });
    };

    return (
	<div class="UpdateItem">
	    <NavBar />
		<div className="container">
		    <div className="header">
			<div className="updateRest">
			    <h5> Update Restaurant</h5>
			</div>

			<Link to="/show-item">
			    <img
				src="https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg"
				alt="back"
				className="BackImg"
			    />
			</Link>
		    </div>
		    <div class="form">
			<form noValidate onSubmit={onSubmit}>
			    <div className="wrapper">
              <label> Name of Restaurant </label>
              <input
                name = 'name'
                value={item.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Restaurant name"
                required
              />
            </div>
            <div className="wrapper">
              <label> Address </label>
              <input
                name = 'address'
                value={item.address}
                onChange={handleChange}
                type="text"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="wrapper">
              <label> Contact Number </label>
              <input
                name = 'contact'
                value={item.contact}
                onChange={handleChange}
                type="text"
                placeholder="XXX-XXX-XXXX"
                required
              />
            </div>
            <div className="wrapper">
              <label> Cuisine </label>
              <input
                name = 'cuisine'
                value={item.cuisine}
                onChange={handleChange}
                type="text"
                placeholder="Enter Cuisine"
                required
              />
            </div>

            <div className="wrapper">
              <label> Image Url </label>
              <input
                name = 'image'
                value={item.image}
                onChange={handleChange}
                type="text"
                placeholder="Enter image url"
                required
              />
            </div>
            <div className="wrapper">
              <label> Description </label>
              <textarea
                name = 'description'
                value={item.description}
                onChange={handleChange}
                type="text"
                placeholder="Enter Description ..."
                required
              />
            </div>

            <div className="but">
              <button className="sub" type="submit">
                  Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateInfo;

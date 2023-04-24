import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import NavBar from './NavBar.js';
import '../styles/ShowList.css';
import axios from 'axios';

function ShowList() {

	const { userId } = useParams();
	const navigate = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
	axios
	    .get(`http://localhost:3001/api/restaurants/user/${userId}`)
	    .then((res) => {
		setItems(res.data);
	    })
	    .catch((err) => {
		console.log('Error from ShowList');
	    });
    }, []);

	const onDelete = (id) => {
		axios
		  .delete(`http://localhost:3001/api/restaurants/delete-restaurant/${id}/${userId}`)
		  .then((res) => {
		      setItems(
			items.filter((item) => {
				   return item._id !== id;
			}));
		  })
		  .catch((err) => {
			console.log('Error form ShowList_deleteClick');
		  });
	  };

	return (
		<div className="ShowList">
		  <NavBar />
		  <div className="account-container">
			<div className>
			  <br />
	
			  <div className="add">
				<button className="addButton">
				  <Link
					style={{ textDecoration: 'none', color: 'white', fontSize: 18 }}
					to={`/create-item/${userId}`}
				  >
					Add New Restaurant
				  </Link>
				</button>
			  </div>
	
			  <h1 className>Your Account</h1>
			  <p>Hello, User </p>
			</div>
			<div>
			  <div className="list">
				{items.map((item, index) => { 
				  return <div>
					 <RestaurantCard item={items[index]} />
				  <div className>
			  <div className="row">
				<div className="col">
				  <button>
					<Link
					  style={{ textDecoration: 'none', color: 'black' }}
					  to={`/edit-item/${items[index]._id}/edit/${userId}`}
					>
					  Edit
					</Link>
				  </button>
				</div>
				<div className="col">
				  <button type="button" onClick= {() => {onDelete(items[index]._id);
				  }}>Delete</button>
				</div>
			  </div>
			  <br />
			</div>
			</div>
				})}

			  </div>
			</div>
	
			
		  </div>
		</div>
	  );
	}
	
	export default ShowList;
	

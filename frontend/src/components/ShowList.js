import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import NavBar from './NavBar.js';
import '../styles/ShowList.css';
import axios from 'axios';

function ShowList() {

	const { id } = useParams();


    const [items, setItems] = useState([]);

    useEffect(() => {
	axios
	    .get(`http://localhost:3001/api/restaurants/user/${id}`)
	    .then((res) => {
		setItems(res.data);
	    })
	    .catch((err) => {
		console.log('Error from ShowList');
	    });
    }, []);

    //  const itemList =
    //  items.length === 0
    //     ? 'there is no item record!'
    //      : items.map((item, k) => <RestaurantCard item={item} key={k} />);


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
					to="/create-item"
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
					  to={`/edit-item/${items[index]._id}`}
					>
					  Edit
					</Link>
				  </button>
				</div>
				<div className="col">
				  <button type="button">Delete</button>
				</div>
			  </div>
			  <br />
			</div>
			</div>
				})}

            {console.log(items)}
			  </div>
			</div>
	
			
		  </div>
		</div>
	  );
	}
	
	export default ShowList;
	

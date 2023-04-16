import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function DisplayItem(props) {
    const [item, setItem] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
	axios
	    .get(`http://localhost:3000/api/items/${id}`)
	    .then((res) => {
		setItem(res.data);
	    })
	    .catch((err) => {
		console.log('Error from DisplayItem');
	    });
    }, [id]);

    const onDeleteClick = (id) => {
	axios
	    .delete(`http://localhost:3000/api/items/${id}`)
	    .then((res) => {
		navigate('/');
	    })
	    .catch((err) => {
		console.log('Error form DisplayItem_deleteClick');
	    });
    };

    const ItemItem = (
	<div>
	    <table className='table table-hover table-dark'>
		<tbody>
		    <tr>
			<th scope='row'>1</th>
			<td>Name</td>
			<td>{item.restName}</td>
		    </tr>
		    <tr>
			<th scope='row'>5</th>
			<td>Address</td>
			<td>{item.address}</td>
		    </tr>
		    <tr>                                                                  
			<th scope='row'>5</th>                                              
			<td>contact</td>                                                    
			<td>{item.contact}</td>                                             
		    </tr>
		    <tr>                                                               
                        
			<th scope='row'>5</th>                                             
                        
			<td>cuisine</td>                                                   
                        
			<td>{item.cuisine}</td>                                            
                        
		    </tr> 
		    <tr>
			<th scope='row'>5</th>
			<td>image</td>
			<td>{item.image}</td>
		    </tr>
		    <tr>
			<th scope='row'>6</th>
			<td>Description</td>
			<td>{item.description}</td>
		    </tr>
		</tbody>
	    </table>
	</div>
    );

    return(
	<div className='DisplayItem'>
	    <div className='container'>
		<div className='row'>
		    <div >
			<br /> <br />
			<Link to='/'>
			    Show Item List
			</Link>
		    </div>
		    <br />
		    <div >
			<h1 >Item's Record</h1>
			<p>View Item's Info</p>
			<hr /> <br />
		    </div>
		    <div>{ItemItem}</div>
		    <div className>
			<button
			    type='button'
			    onClick={() => {
				onDeleteClick(item._id);
			    }}
			>
			    Delete Item
			</button>
		    </div>
		    <div>
			<Link
			    to={`/edit-item/${item._id}`}
			>
			    Edit Item
			</Link>
		    </div>
		</div>
	    </div>
	</div>
    );
}

export default DisplayItem;

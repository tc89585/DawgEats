import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import './DisplayItem.css';

function DisplayItem() {
    const [item, setItem] = useState({});

	const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
	axios
	    .get(`http://localhost:3001/api/restaurants/restaurant/${id}`)
	    .then((res) => {
		setItem(res.data);
	    })
	    .catch((err) => {
		console.log('Error from DisplayItem');
	    });
    }, [id]);


    const ItemItem = (
	<div>
	    <table className='table'>
		<tbody className='tbody'>
		    <tr>
			<th scope='row'></th>
			<td className='bold'>Restaurant's Name:</td>
			<td>{item.name}</td>
		    </tr>
			<br /> <br />
		    <tr>
			<th scope='row'></th>
			<td className='bold'>Address:</td>
			<td>{item.address}</td>
			<br /> <br />
		    </tr>
		    <tr>                                                                  
			<th scope='row'></th>                                              
			<td className='bold'>Contact:</td>                                                    
			<td>{item.number}</td> 
			<br /> <br />                                            
		    </tr>
		    <tr>                                                               
                        
			<th scope='row'></th>                                             
                        
			<td className='bold'>Cuisine:</td>                                                   
                        
			<td>{item.cuisine}</td>                                            
                        
		    </tr> 
		    <tr>
			<th scope='row'></th>
			<td className='bold'>Image: </td>
			<td><img className='image' src = {item.imageUrl} alt = {item.name}/></td>
		    </tr>
		    <tr>
			<th scope='row'></th>
			<td className='bold'>Description:</td>
			<td>{item.description}</td>
		    </tr>
		</tbody>
	    </table>
	</div>
    );
 
	const goBack =() => {
		navigate(-1);
	}

    return(

		
	<div className='DisplayItem'>
	    <div className='container'>
			<div className = "back">
		<button className = " backButton" onClick={goBack}>
			    <img
				src="https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg"
				alt="back"
				className="BackImg"
			    />
			</button>
			</div>
		<div className='row'>
		    <div >
			<br /> <br />
		    </div>
		    <br />
		    <div >
			<h1 >Restaurant</h1>
			<p>View Restaurant's Info</p>
			<hr /> <br />
		    </div>
		    <div>{ItemItem}</div>
		</div>
	    </div>
	</div>
    );
}

export default DisplayItem;

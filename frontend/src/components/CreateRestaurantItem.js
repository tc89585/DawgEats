import React, {useState} from 'react';
import "./FormStylesheet.css"
import {Link} from 'react-router-dom';
import NavBar from './NavBar.js';


function CreateRestaurantItem(props) {


    const [item, setItem] = useState({
        restName: '',
        address: '',
        contact: '',
        cuisine: '',
        image: '',
        description: '',
    });


    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value});
    };


    return (
        <div class = "CreateRestaurantItem">  
            <NavBar/>
            <div className = " container">                                                                           
                <div className = "header">                                                                           
                    
                    <h5> New Restaurant</h5>                                                                         
                    
                    <Link to='/show-item'>                                                                                    
                        <img src = "https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg" alt = "back" className = "BackImg"/>                                                                 
                    </Link>                                                                                          
                    
                </div>                                                                                               
                <div class = "form">                                                                                 
                    <form noValidate>                                                                                
                        <div className = "wrapper">                                                                  
                            <label> Name of Restaurant</label>                                                       
                            <input
                                value={item.restName} onChange={handleChange} type='text' name = 'restName'  placeholder="Enter Restaurant name" required/>                                                                              
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Address</label>                                                              
                            <input
                                value={item.address} name = 'address' onChange={handleChange} type="text" placeholder ="Enter address" required/>                                                                                         
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Contact Number </label>                                                          
                            <input
                                value={item.contact}  name = "contact" onChange={handleChange}  type="text" placeholder="XXX-XXX-XXXX" required/>                                                                                        
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Cuisine </label>                                                                 
                            <input
                                value={item.cuisine} name = "cuisine" onChange={handleChange} type="text" placeholder="Enter Cuisine" required/>                                                                                         
                        </div>                                                                                       
                        
                        
                        <div className = "wrapper">                                                                  
                            <label> Profile Image Url </label>                                                       
                            <input
                                value={item.image} onChange={handleChange} name = "image" type="text" placeholder="Enter image url" required/>                                                                                           
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Description </label>                                                             
                            <textarea
                                value={item.description} name = "description" onChange={handleChange} type="text" placeholder="Enter Description ..." required/>                                                                         
                        </div>                                                                                       
                        
                        <div className = "but">                                                                      
                            <button  type='submit' className = "sub">                                                    
				<Link to='/show-item' style={{textDecoration: 'none', color: 'white'}}>                           
                                    Post                                                                                 
				</Link>                                                                                  
                            </button>                                                                                    
                        </div>                                                                                   
			</form>                                                                                          
			</div>                                                                                               
			</div>                                                                                                   
			</div>
			)
			}

		    export default CreateRestaurantItem;




                    

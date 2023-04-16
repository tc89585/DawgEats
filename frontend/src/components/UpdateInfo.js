import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./FormStylesheet.css";
import NavBar from './NavBar.js';

function UpdateInfo(props) {

    const [item, setItem] = useState({
        restName: 'Taichi Bubble Tea',
        address: '247 E Broad St, Athens, GA 30601',
        contact: '706-395-6483',
        cuisine: 'asian',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNrqoDjdkfcLJAIHgqim9ATpX5f0v8zgMVRCRia=s1360-w1360-h1020',
        description: 'A Bubble tea spot',
    });


    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    };


    return (
        <div class = "UpdateItem">    
        <NavBar/>
            <div className = " container">                                                                           
                <div className = "header">                                                                           
                                                                                                                     
                    <h5> Update Restaurant</h5>                                                                      
                                                                                                                     
                    <Link to='/show-item'>                                                                                    
                        <img src = "https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEE\
Etl391oRLM.jpg" alt = "back" className = "BackImg"/>                                                                 
                    </Link>                                                                                          
                                                                                                                     
                </div>                                                                                               
                <div class = "form">                                                                                 
                    <form noValidate >                                                                               
                        <div className = "wrapper">                                                                  
                            <label> Name of Restaurant </label>                                                      
                            <input
                                value={item.restName} onChange={handleChange} type="text" placeholder="Enter Restaur\
ant name" required/>                                                                                                 
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Address </label>                                                                 
                            <input
                                value={item.address} onChange={handleChange} type="text" placeholder="Enter address"\
 required/>                                                                                                          
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Contact Number </label>                                                          
                            <input
                                value={item.contact}  onChange={handleChange}  type="text" placeholder="XXX-XXX-XXXX\
" required/>                                                                                                         
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Cuisine </label>                                                                 
                            <input
                                value={item.cuisine} onChange={handleChange} type="text" placeholder="Enter Cuisine"\
 required/>                                                                                                          
                        </div>

<div className = "wrapper">                                                                  
                            <label> Image Url </label>                                                               
                            <input
                                value={item.image} onChange={handleChange} type="text" placeholder="Enter image url"\
 required/>                                                                                                          
                        </div>                                                                                       
                        <div className = "wrapper">                                                                  
                            <label> Description </label>                                                             
                            <textarea
                                value={item.description} onChange={handleChange} type="text" placeholder="Enter Desc\
ription ..." required/>                                                                                              
                        </div>                                                                                       
                                                                                                                     
                        <div className = "but">                                                                      
                            <button className = "sub"  type='submit'>                                                
                                <Link to='/show-item' style={{textDecoration: 'none', color: 'white'}}>                        
                                    Update                                                                           
                                </Link>                                                                              
                            </button>                                                                                
                        </div>                                                                                       
                    </form>                                                                                          
                </div>                                                                                               
            </div>                                                                                                   
        </div>
    )
}


export default UpdateInfo;

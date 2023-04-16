import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import NavBar from './NavBar.js';
import "./ShowList.css";

function ShowList() {
    const [items, setItems] = useState({
        restName: 'Taichi Bubble Tea',
        address: '247 E Broad St, Athens, GA 30601',
        contact: '706-395-6483',
        cuisine: 'asian',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNrqoDjdkfcLJAIHgqim9ATpX5f0v8zgMVRCRia=s1360-\
w1360-h1020',
        description: 'A Bubble tea spot',
    });


    return (
        <div className='ShowList'>     
        
        <NavBar/>
            <div className='container'>                                                                 
                <div className>                                                                         
                    <br />                                                                              
                                                                                                        
                    <div className ="add">                                                              
                        <button className ="addButton">                                                 
                            <Link
                                style={{ textDecoration: 'none', color: 'white', fontSize: 18}}
                                to='/create-item'
                            >                                                                           
                                 Add New Restaurant                                                     
                            </Link>                                                                     
                        </button>                                                                       
                    </div>                                                                              
                                                                                                        
                    <h1 className>Your Account</h1>                                                     
                    <p>Hello, User </p>                                                                 
                </div>                                                                                  
                <div>                                                                                   
                    <div className='list'><RestaurantCard item = {items} /></div>                       
                </div>                                                                                  
                                                                                                        
                <div className>                                                                         
                    <div className = "row">                                                             
                                                                                                        
                        <div className ="col">                                                          
                            <button>                                                                    
                                <Link
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    to='/edit-item'
                                >                                                                       
                                    Edit                                                                
                                </Link>                                                                 
                            </button>                                                                   
                        </div>                                                                          
                        <div className ="col">                                                          
                            <button
                                type='button'
                            >                                                                           
                                                                                                        
                                Delete                   
                                
                                </button>                                                                       
                    </div>                                                                              
                                                                                                        
                    <h1 className>Your Account</h1>                                                     
                    <p>Hello, User </p>                                                                 
                </div>                                                                                  
                <div>                                                                                   
                    <div className='list'><RestaurantCard item = {items} /></div>                       
                </div>                                                                                  
                                                                                                        
                <div className>                                                                         
                    <div className = "row">                                                             
                                                                                                        
                        <div className ="col">                                                          
                            <button>                                                                    
                                <Link
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    to='/edit-item'
                                >                                                                       
                                    Edit                                                                
                                </Link>                                                                 
                            </button>                                                                   
                        </div>                                                                          
                        <div className ="col">                                                          
                            <button
                                type='button'
                            >                                                                           
                                                                                                        
                                Delete                                                                 
                                                                                                        
                            </button>                                                                   
                        </div>                                                                          
                    </div>                                                                              
                    <br />                                                                              
                </div>                                                                                  
            </div>                                                                                      
        </div>
    );
}

export default ShowList;


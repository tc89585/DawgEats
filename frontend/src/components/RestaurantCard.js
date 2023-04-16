import React from 'react';
import './RestaurantCard.css';
import { Link } from 'react-router-dom';

function RestaurantCard(props) {

    const item = props.item;

    return (
        <div className='card'>                                                                          
            <img src={item.image} alt={item.restName} height={200}/>                                    
            <div className='description'>                                                               
                <h2>                                                                                    
                    {item.restName}                                                                     
                </h2>                                                                                   
                <div className = "container2">                                                          
                    <img src= "https://static.vecteezy.com/system/resources/previews/003/672/373/origin\
al/junk-food-cartoon-design-vector.jpg" alt="food" className = "food"/>                                 
                    <h3>{item.cuisine}</h3>                                                             
                </div>                                                                                  
            </div>                                                                                      
        </div>
    );

}

export default RestaurantCard;

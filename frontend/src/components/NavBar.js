import React, {useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {



    return (
	
	<nav className="navbar">
	    <div className="navbar-brand">
		<Link to= '/'>
		    <img src="../logo.png" alt="georgia bulldog logo" className="logo" />
		</Link>
	    </div>
	    <div className="logo-name">Dawg Eats</div>
	    <div className="navbar-search">
		<input tye="text" placeholder="Search" className="search-input" />

		    <button className="search-button">Search</button>		
	    </div>
	</nav>
    );
};

export default NavBar;

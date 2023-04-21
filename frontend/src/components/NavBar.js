import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="../images/logo-3.png"
            alt="dawg eats logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="bar">
        <input type="text" placeholder="Search" id="navbar-search-field" />
        <img src="../images/loupe.png" alt="search icon" class="search-icon" />
      </div>

      <div className="account-button">
        <Link to="/show-item">
          <img
            src="./images/user.png"
            class="account-icon"
            alt="account icon"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

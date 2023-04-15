import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="../logo.png" alt="georgia bulldog logo" className="logo" />
      </div>
      <div className="logo-name">Dawg Eats</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;

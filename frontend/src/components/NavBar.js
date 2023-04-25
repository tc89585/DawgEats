import React, { useState, useEffect, useContext } from 'react';
import '../styles/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Restaurant from './Restaurant';

const NavBar = ({ restaurants, setRestaurants }) => {
  const [searchValue, setSearchValue] = useState('');
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [token, setToken] = useState();
  const [userId, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setToken(localStorage.getItem('auth-token'));
      await setId(localStorage.getItem('auth-Id'));
    };
    fetchData();
  }, []);

  const onLogOut = async (e) => {
    e.preventDefault();

    await setUserData({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem('auth-token', '');
    localStorage.setItem('auth-Id', '');

    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="../images/logo-3.png"
          alt="dawg eats logo"
          className="logo"
          onClick={goHome}
        />
      </div>
      <div className="bar">
        <input
          type="text"
          placeholder="Search"
          id="navbar-search-field"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src="../images/loupe.png"
          alt="search icon"
          className="search-icon"
          sytle={{ cursor: 'pointer' }}
          onClick={handleSearch}
        />
      </div>
      {token ? (
        <button onClick={onLogOut} id="login-button">
          Logout
        </button>
      ) : (
        <Link to={`/login/`}>
          <button id="login-button">Login</button>
        </Link>
      )}

      {token ? (
        <div className="account-button">
          <Link to={`/show-item/${userId}`}>
            <img
              src="./images/user.png"
              class="account-icon"
              alt="account icon"
            />
          </Link>
        </div>
      ) : (
        <div> </div>
      )}
    </nav>
  );

  function handleSearch() {
    const newRestaurants = [];
    restaurants.forEach((restaurant, index) => {
      if (restaurant.name.toLowerCase().includes(searchValue)) {
        newRestaurants[index] = restaurant;
      }
    });
    setRestaurants(newRestaurants);
  }

  function goHome() {
    navigate('/');
    window.location.reload();
  }
};

export default NavBar;

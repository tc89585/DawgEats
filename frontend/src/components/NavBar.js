import React, { useState, useEffect, useContext} from 'react';
import '../styles/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext"; 

const NavBar = () => {

const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const[token, setToken] = useState();
  const[userId, setId] = useState();

useEffect(() =>{

  const fetchData = async () => {
     setToken(localStorage.getItem("auth-token"));
    await setId(localStorage.getItem("auth-Id"));
  }
  fetchData();
}, []);


const onLogOut = async(e)  => {
  e.preventDefault();

   await setUserData({
    token: undefined,
    user: undefined,
  
  });
  
  localStorage.setItem("auth-token", "");
  localStorage.setItem("auth-Id", "");
  
  navigate("/");
  window.location.reload();
}

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
      {token ? (<button onClick={onLogOut} id="login-button">Logout</button> )
      : (
      <Link to={`/login/`}>
      <button id="login-button">Login</button>
      </Link>
      ) }
    
   
      {token ? (
      <div className="account-button">
        <Link to={`/show-item/${userId}`}>
          <img
            src="./images/user.png"
            class="account-icon"
            alt="account icon"
          />
        </Link>
      </div> ) : (<div> </div>)}
    
    </nav>
  );
};

export default NavBar;

import React, { useState, useContext } from 'react';
import CreateRestaurantItem from './components/CreateRestaurantItem';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import UpdateInfo from './components/UpdateInfo';
import Createaccount from './components/Createaccount';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UserContext from './context/UserContext';
import axios from "axios"; 
import { useEffect } from "react";

//import React, { useState, useContext } from "react"; 


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    token: undefined,
    user: undefined,
  });
 //change above block later
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkifLoggedIn = async() => {
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3001/tokenIsValid",
        null, 
        { headers: { "x-auth-token": token}}
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3001/", {
          headers: { "x-auth-token": token}, 
        });

        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkifLoggedIn();
  }, []);
  
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage isLoggedIn={isLoggedIn} />}
          />
          <Route path="/create-item/:userId" element={<CreateRestaurantItem />} />
          <Route path="/create-user" element={<Createaccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit-item/:id/edit/:userId" element={<UpdateInfo />} />
          <Route path="/show-item/:userId" element={<ShowList />} />
        </Routes>
      </div> 
    </Router>
  );
};

export default App;

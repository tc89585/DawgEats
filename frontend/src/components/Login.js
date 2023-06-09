import '../styles/Login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import {Form, Button, Card, Alert, Container} from "react-bootstrap";
// import { useContext, useState } from 'react';
// import axios from 'axios';
// import UserContext from '../context/UserContext';
import React, { useState, useContext } from "react"; 
//import { Form, Button, Card, Alert, Container } from "react-bootstrap"; 
import axios from "axios"; 
import UserContext from "../context/UserContext"; 
import { useNavigate, Link } from "react-router-dom";

//import { BrowserRouter } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
 
  return (
    <div className="login">
      <div className="logo-container">
        <img
          src="../images/logo-3.png"
          alt="dawg-eats logo"
          className="dawg-eats-logo"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h1 id="login-title">Login</h1>
        <br></br>

        <label for="username-field">Username:</label>
        <br />
        <input
          type="text"
          id="username-field"
          name="username"
          placeholder="Username"
          onChange = {e => setUsername(e.target.value)}
        />
        <br />
        <label for="password-field">Password:</label>
        <br />
        <input
          type="password"
          id="password-field"
          class="login-form-field"
          placeholder="Password"
          onChange = {e => setPassword(e.target.value)}
        ></input>
        <br></br>
          <input
            disabled = {loading}
            className="button"
            type="submit"
            value="Login"
            id="login-form-submit"
          ></input>

        <br></br>
        <br></br>

        <Link to="/create-user">
          <input
            type="submit"
            className="button"
            value="Create Account"
          ></input>
        </Link>
      </form>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // eslint-disable-next-line no-restricted-globals
      const loginUser = { username, password };
      const loginRes = await axios.post(
        "http://localhost:3001/api/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("auth-Id", loginRes.data.user.id);
      navigate('/');
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }
}

export default Login;
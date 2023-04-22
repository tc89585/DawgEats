import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useNavigate } from 'react';
import './Login.css';
import axios from 'axios';
import UserContext from '../context/UserContext';

function Login() {
  const [email, setEmail] = useState();
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
      <form>
        <h1 id="login-title">Login</h1>
        <br></br>

        <label for="username-field">Username:</label>
        <br />
        <input
          type="text"
          id="username-field"
          name="username"
          placeholder="Username"
        />
        <br />
        <label for="password-field">Password:</label>
        <br />
        <input
          type="password"
          id="password-field"
          class="login-form-field"
          placeholder="Password"
        ></input>
        <br></br>
        <Link to="/">
          <input
            className="button"
            type="submit"
            value="Login"
            id="login-form-submit"
          ></input>
        </Link>

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
      const loginUser = { email, password };
      const loginRes = await axios.post(
        'http://localhost:3000/api/users/login',
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem.setItem('auth.token', loginRes.data.token);
      navigate('/');
    } catch (err) {
      setLoading(false);
      error.response.data.msg && setError(err.response.data.msg);
    }
  }
}

export default Login;

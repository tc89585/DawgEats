import { Link } from 'react-router-dom';
import '../styles/CreateAccount.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import axios from 'axios';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);
  return (
    <div className="create-account">
      <div className="acc-img">
        <img src="./images/logo-3.png" alt="logo" />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Create Account</h2>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" placeholder="Name" />
        <br />
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password-field"
          class="login-form-field"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label id="password-label" for="password">
          Confirm Password:
        </label>
        <input
          type="password"
          id="password-field"
          class="login-form-field"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <br></br>
        <br></br>

        <input
          className="button"
          type="submit"
          value="Create Account"
          id="login-form-submit"
          disabled={loading}
        ></input>
        <br></br>
        <br></br>

        <Link to="/login">
          <input
            className="button"
            type="submit"
            value="Return to login"
          ></input>
        </Link>
      </form>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = { username, password, confirmPassword };
      console.log(newUser);
      await axios.post('http://localhost:3001/api/users/signup', newUser);
      const loginResult = await axios.post(
        'http://localhost:3001/api/users/login',
        {
          username,
          password,
        }
      );
      setUserData({
        token: loginResult.data.token,
        user: loginResult.data.name,
      });
      localStorage.setItem('auth-token', loginResult.data.token);
      navigate('/');
    } catch (err) {
      setLoading(false);
      console.log(err);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }
}
export default CreateAccount;

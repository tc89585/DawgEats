import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
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
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username-field"
          name="username"
          placeholder="Username"
        />
        <br />
        <label for="username">Password:</label>
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
}
export default Login;

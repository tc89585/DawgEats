import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <form>
        <h1>Dawg Eats Login</h1>
        <br></br>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
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

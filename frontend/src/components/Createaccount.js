import { Link } from 'react-router-dom';
import '../styles/CreateAccount.css';

function CreateAccount() {
  return (
    <div className="create-account">
      <div className="acc-img">
        <img src="./logo-5.png" alt="logo" />
      </div>
      <form>
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
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password-field"
          class="login-form-field"
          placeholder="Password"
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
        ></input>
        <br></br>
        <br></br>

        <Link to="/">
          <input
            className="button"
            type="submit"
            value="Create Account"
            id="login-form-submit"
          ></input>
        </Link>
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
}
export default CreateAccount;

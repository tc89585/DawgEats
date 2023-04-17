import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
    <form>
        <h1>DawgsEat Login</h1>
        <label for="username">Username:</label><br/>
        <input type="text" id="username" name="username" placeholder="username"/><br/>
        <label for="username">Password:</label><br/>
        <input type="password" id="password-field" class="login-form-field" placeholder="Password"></input>
            <br></br>
	    <Link to= '/'>
            <input className="button" type="submit" value="Login" id="login-form-submit"></input>
	    </Link>

	<br></br>
	    <Link to= '/create-user'>
	    <p> Create Account</p>
	</Link>

    </form>
    
    
    
    
    )
    
    
  }
  export default Login;

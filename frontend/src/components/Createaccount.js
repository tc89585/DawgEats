import './Login.css';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
	    <form>
            <h1>DawgsEat</h1>
            <h2>Create Account</h2>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username" placeholder="username"/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password-field" class="login-form-field" placeholder="Password"></input>
            <br></br>
            <label for="password">Confirm Password:</label><br/>
            <input type="password" id="password-field" class="login-form-field" placeholder="Confirm Password"></input>
            <br></br>

	<Link to= '/'>
            <input className="button" type="submit" value="Create Account" id="login-form-submit"></input>
	    </Link>
	    
	    <Link to= '/login'>
	    <p> Sign In</p>
	    </Link>

	</form>
	    
	
	
	
    )
    
    
  }
  export default CreateAccount;

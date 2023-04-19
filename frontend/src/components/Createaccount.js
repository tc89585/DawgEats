import './Login.css';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
	    <form>
            <h1>DawgsEat</h1>
            <h2>Create Account</h2>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" placeholder="Name"/><br/>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username" placeholder="Last Name"/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password-field" class="login-form-field" placeholder="Password"></input>
            <br></br>
            <label for="password">Confirm Password:</label><br/>
            <input type="password" id="password-field" class="login-form-field" placeholder="Confirm Password"></input>
            <br></br>
            <br></br>

	<Link to= '/'>
            <input className="button" type="submit" value="Create Account" id="login-form-submit"></input>
	    </Link>
        <br></br>
        <br></br>

	    <Link to= '/login'>
	    <input className="button" type="submit" value="Return to login"></input>
	    </Link>

	</form>
	    
	
	
	
    )
    
    
  }
  export default CreateAccount;

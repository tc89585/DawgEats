import './Login.css';

function Login() {
    return (
    <form>
        <h1>DawgsEat Login</h1>
        <label for="username">Username:</label><br/>
        <input type="text" id="username" name="username" placeholder="username"/><br/>
        <label for="username">Password:</label><br/>
        <input type="password" id="password-field" class="login-form-field" placeholder="Password"></input>
        <br></br>
        <input className="button" type="submit" value="Login" id="login-form-submit"></input>


    </form>
    
    
    
    
    )
    
    
  }
  export default Login;
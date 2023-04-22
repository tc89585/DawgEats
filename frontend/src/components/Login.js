import { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error, setError] = useState();
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const { setUserData} = useContext(UserContext);

function Login() {
    return (
    <form>
        <h1>DawgsEat Login</h1>
        <br></br>
        <label for="email">Email:</label><br/>
        <input type="text" id="username" name="username" placeholder="username"/><br/>
        <label for="username">Password:</label><br/>
        <input type="password" id="password-field" class="login-form-field" placeholder="Password"></input>
            <br></br>
	    <Link to= '/'>
            <input className="button" type="submit" value="Login" id="login-form-submit"></input>
	    </Link>

	<br></br>
    <br></br>

	    <Link to= '/create-user'>
	    <input type="submit" className="button" value="Create Account"></input>
	</Link>

    </form>
    
    
    
    
    )
    
    
  }

async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
        const loginUser = {email, password};
        const loginRes = await axios.post("http://localhost:3000/api/users/login", loginUser);
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem.setItem("auth.token", loginRes.data.token);
        navigate('/');


    } catch (err) {
        setLoading(false);
        error.response.data.msg && setError(err.response.data.msg);
    }
}
export default Login;

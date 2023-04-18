import './App.css';
import React, {useState} from 'react'
import CreateRestaurantItem from './components/CreateRestaurantItem';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import ShowList from './components/ShowList';
import UpdateInfo from './components/UpdateInfo';
import Createaccount from './components/Createaccount';
import Login from './components/Login';
import HomePage from './components/HomePage';

const App = () => {

    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
	setisLoggedIn(true);
    };
    const logOut = () => {
	setisLoggedIn(false);
    };
    return (
        <Router>                                                                                                                                                                                        
	    {isLoggedIn ? (
		<Link to='/'>
			<a onClick={logOut} href="#" class="logoutbutton">Logout</a>
		</Link>
	    ) : (
		<Link to='/login'> 
			<a onClick={logIn} href="#" class="loginbutton">Login</a>
		</Link>
	    )}
            <div>                                                                                                                                                                                           
		<Routes>                                                                                                                                                                                        
		    <Route exact path='/' element={<HomePage isLoggedIn = {isLoggedIn} />} />                                                                                                                                                 
		    <Route path='/create-item' element={<CreateRestaurantItem />} />                                                                                                                                
		    <Route path='/create-user' element={<Createaccount />} />
		    <Route path='/login' element={<Login />} />
		    <Route path='/edit-item' element={<UpdateInfo />} />                                                                                                                                            
		    <Route path='/show-item' element={<ShowList />} />                                                                                                                                                                                                                                                                                             
		</Routes>                                                                                                                                                                                       
            </div>                                                                                                                                                                                          
        </Router>
    );
};

export default App;

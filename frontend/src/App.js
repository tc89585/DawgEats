import './App.css';
import React from 'react'
import CreateRestaurantItem from './components/CreateRestaurantItem';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowList from './components/ShowList';
import UpdateInfo from './components/UpdateInfo';
import Createaccount from './components/Createaccount';
import Login from './components/Login';
import HomePage from './components/HomePage';

const App = () => {
    //const [Restaurant, setRestaurant] = useState([]);;    
    const isLoggedin = true;


    return (
            <Router>                                                                                                                                                                                        
            <div>                                                                                                                                                                                           
            <Routes>                                                                                                                                                                                        
            <Route exact path='/' element={<HomePage />} />                                                                                                                                                 
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

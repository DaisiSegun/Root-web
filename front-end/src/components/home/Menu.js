import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css'
import Header from '../header/Header'
import { useLogout } from '../../hooks/useLogout'
import axios from 'axios';

function Menu() {

  const { logout } = useLogout()
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Make a POST request to the server's /logout route
      const response = await axios.post('/api/logout');

      // Handle the response if needed
      console.log('Logout successful', response);

      // Check if the logout was successful and navigate to the home page
      if (response.status === 200) {
        // Redirect to the home page
        navigate('/');
        logout();
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  return (
    <div className='main'>
    <div className='menu-container'>
      <Header/>
      <hr className='line'></hr>
      <div className='nav-container'>
        <h1 className='headers'>Menu</h1>
        <nav className='nav'>
          <div className='bottom'>
          <Link className='link' to='/customerservice'>
          <button className='nav-button'>
            <span className='nav-tit'>Customer Sevice</span>
            <img className='nav-icon04' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          </div>
          
          
          <button onClick={handleLogout} className='nav-button'>
            <span className='nav-tit'>Logout</span>
            <img className='nav-icon-04' src='./images/nav-blue.svg'/>
          </button>
         
          <div className='big-space'></div>
          
        </nav>
        
        </div>
      </div>
  </div>
  )
}

export default Menu
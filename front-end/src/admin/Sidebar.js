import React from 'react'
import './sidebar.css'
import './pages.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
function Sidebar() {
  function handleLogout() {
    // Make an API request to log the user out
    axios.post('/api/logout') // Replace with your actual logout endpoint
      .then((response) => {
        // Handle the success response, e.g., clear user session or do other tasks
        console.log(response.data); // You can log the response for debugging
        // Redirect to the login page or perform other actions after logout
      })
      .catch((error) => {
        // Handle any errors from the API request
        console.error(error);
      });
  }
  
  return (
    <div className='sidebar-container'>
        <img className='logo1' src='./images/logo.jpg'/>
    <nav className='nav2'>
    <Link className='link' to='/dashboard'>
    <div className='nav-select2'>
        <img src='./images/dashboard.svg' className='nav-icon2'/> <p className='nav-text'>Dashboard</p>
      </div>
    </Link>

    <Link className='link' to='/allorder'>
    <div className='nav-select2'>
      
        <img src='./images/orders.svg' className='nav-icon2'/> <p className='nav-text'>Orders </p>
        {/* <div className='not2'>
      </div> */}
        
      
      </div>
    </Link>
    

    <Link className='link' to='/upload-repair'>
    <div className='nav-select2'>
        <img src='./images/upload-repair.svg' className='nav-icon2'/> <p className='nav-text'>Upload Repair</p>
      </div>
    </Link>
      
    <Link className='link' to={'/inventory'}>
    <div className='nav-select2'>
        <img src='./images/inventory.svg' className='nav-icon2'/> <p className='nav-text'>Inventory</p>
      </div>
    </Link>
      
    
    <Link to="#" onClick={handleLogout}>
  <div className='nav-select2'>
    <img src='./images/log-out.svg' className='nav-icon2'/> <p className='nav-text'>Log out</p>
  </div>
</Link>


    </nav>
    </div>
  )
}

export default Sidebar
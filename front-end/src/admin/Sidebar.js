import React from 'react'
import './sidebar.css'
import './pages.css'
import { Link } from 'react-router-dom'
function Sidebar() {
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
        <div className='not2'>
      </div>
        
      
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
      
    
      <div className='nav-select2'>
        <img src='./images/log-out.svg' className='nav-icon2'/> <p className='nav-text'>Log out</p>
      </div>

    </nav>
    </div>
  )
}

export default Sidebar
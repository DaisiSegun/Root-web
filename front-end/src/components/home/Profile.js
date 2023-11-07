import React from 'react'

import { Link } from 'react-router-dom'
import './main.css'
import Header from '../header/Header'

function Profile() {
  return (
    <div className='main'>
  
      <Header/>
      {/* <hr className='line'></hr> */}
      <div className='nav-container3'>
        <h1 className='headers'>Profile</h1>
        <nav className='nav'>
          <div className='split-customer'>
          {/* <Link className='link' to='/orderhistory'>
          <button className='nav-button'>
            <span className='nav-tit'>Order History</span>
            <img className='nav-icon04' src='./images/nav-blue.svg'/>
          </button>
          </Link> */}
          <Link className='link' to='/editprofile'>
          <button className='nav-button'>
            <span className='nav-tit'>Edit Profile</span>
            <img className='nav-icon04' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          </div>
          
        
          <div className='space'></div>
          
        </nav>
        
        </div>
    
  </div>
  )
}

export default Profile
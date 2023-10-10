import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <div className='nav-container'>
        <h1 className='headers'>Categories</h1>
        <nav className='nav'>
          <Link className='link' to='/screen'>
          <button className='nav-button'>
            <span>Screen</span>
            <img className='nav-icon' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          <Link className='link' to='/battery'>
          <button className='nav-button'>
            <span>Battery</span>
            <img className='nav-icon-01' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          <Link className='link' to='/chargingport'>
          <button className='nav-button'>
            <span>Charging Port</span>
            <img className='nav-icon-02' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          <Link className='link' to='/backglass'>
          <button className='nav-button'>
            <span>Back Glass</span>
            <img className='nav-icon-03' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          
          <Link className='link' to='/others'>
          <button className='nav-button'>
            <span>Others</span>
            <img className='nav-icon-04' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          
        </nav>
        <div className='headers-02'>Suggested Repairs</div>
        </div>
    </div>
  )
}

export default Nav
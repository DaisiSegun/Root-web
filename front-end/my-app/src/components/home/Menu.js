import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Header from '../header/Header'
import { useLogout } from '../../hooks/useLogout'
function Menu() {

  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
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
          
          
          <button onClick={handleClick} className='nav-button'>
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
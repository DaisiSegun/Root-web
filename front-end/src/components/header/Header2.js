import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header2() {
  return (
    <div className='header'>
       <div className='section_top'>
       <Link to='/menu'>
        <img className='menu' src='./images/menu.svg'/>
        </Link>
        <Link to='/'>
        <img className='logo' src='./images/root-full-07.png'/>
        </Link>
        
        <Link className='link' to='/cart'>
        <div className='cart_container'>
          <p className='cart_text'>Cart</p>
          <img src='./images/cart.svg'/>
          <p className='cart_text'>2</p>
        </div>
        </Link>
      </div>

      <div className='section_middle'> 
        <input className='search' type='text' placeholder='Search Root'/>
        <div className='search_icon_container'>
        <Link className='link' to='/searchresult'>
          <img className='search_icon' src='./images/search.svg'/>
        </Link>
        </div>
        
      </div>

      <div className='section_bottom2'>
          <h1 className='hello-user'>Hello Funke</h1>
       
       
        <Link to='/profile' className='link'>
          <div className='home-profile'>
            <img src='./images/profile.svg'/>
            <h1 className='profile-text'>Profile</h1>
          </div>
          
        </Link>
      </div>

    </div>
  )
}

export default Header2
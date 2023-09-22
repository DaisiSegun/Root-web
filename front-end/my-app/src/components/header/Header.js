import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLocation } from 'react-router-dom';
import { useStateValue } from "../../StateProvider";

import Img1 from '../../assets/img/root-full-07.png'
import Menu1 from '../../assets/img/menu.svg'
import Cart1 from '../../assets/img/cart.svg'
import Search1 from '../../assets/img/search.svg'
import Profile1 from '../../assets/img/profile.svg'


function Header() {
  const { user } = useAuthContext()
  const location = useLocation();
  const { email } = location.state || {};
  const [{ basket, user1 }, dispatch] = useStateValue();
  
 
  return (
    
    <div className='header'>
      <div className='section_top'>
        <Link to='/menu'>
        <img className='menu' src={Menu1}/>
        </Link>
        
        <Link to='/'>
        <img className='logo' src= {Img1}/>
        </Link>

        <Link className='link' to='/cart'>
        <div className='cart_container'>
          <p className='cart_text'>Cart</p>
          <img src={Cart1}/>
          <p className='cart_num'> {basket?.length}</p>
        </div>
        </Link>
        
      </div>

      <div className='section_middle'> 
        <input className='search' type='text' placeholder='Search Root'/>
        <div className='search_icon_container'>
        
        <Link className='link' to='/searchresult'>
          <img className='search_icon' src={Search1}/>
        </Link>
        
        </div>
        
      </div>
      {!user && (
      <div className='section_bottom'>
        <Link to='/signin' className='link'>
          <button className='dark_button'>Sign In</button>
        </Link>
        
        <h1 className='hello'>Hello</h1>
        {email && <p className='helloo'>Email: {email}</p>}
        <Link to='/signup' className='link'>
          <button className='light_button'>Register</button>
        </Link>
      </div>)}
      

      {user && (
      <div className='section_bottom2'>
        <div className='hello-con'>
        <h1 className='hello'> Hello</h1>
        </div>
       
        
       
        <Link to='/profile' className='link'>
        {user && (

        <div class="button-container">
        <img class="hover-button" src={Profile1}/>
        <span class="hover-text">Profile</span>
        </div>

            
          
         )}
        
        </Link>
      </div>)}

    </div>
  )
}

export default Header
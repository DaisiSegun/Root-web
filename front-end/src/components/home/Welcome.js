import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function Welcome() {

  const location =useLocation();
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       

   
        <img className='welcome-image' src='./images/welcome-root.svg'/>
        <p className='welcome-text'>Welcome to Root</p>
        <p className='welcome-user'> {location.state.id}!</p>
        <p className='welcome-text2'>You can now repair your IPhone</p>
            <Link to='/'>
            <button className='button-blue'>Go Home</button>
            </Link>
            <div className='space'></div>

      
    </div>
  )
}

export default Welcome
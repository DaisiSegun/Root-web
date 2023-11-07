import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

import {useNavigate} from 'react-router-dom'
function SignUpCart() {

  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       


        <p className='welcome-text'>Proceed to Registration</p>
        <div className='space3'></div>
        <div className='red-box'>
          <h3>Please register to add to cart & order for repair</h3>
        </div>
            <Link to='/signup'>
            <button className='button-blue'>Register</button>
            </Link>
          

            <p className='terms03'>Already have an account?     
            <Link className='link' to='/signin'>
            <span className='terms_condition02'> Sign in</span>
            </Link>
             </p>
             <div className='space'></div>
            
    </div>
  )
}

export default SignUpCart
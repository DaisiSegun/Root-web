import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       

      <div className='sign_up_container'>
        <h5>Reset Password</h5>
        <h1 className='reset-note'>Enter the email asssociated with your account and we'll send you a link to reset your password.</h1>
        <form className='form'>
            
            <label>Email</label>
            <input type='email' placeholder='Email'/> 
            <Link to='/passwordreset'>
            <button className='button-blue'>Get Code</button>
            </Link>
            <p className='terms02'>Don't have an account?     
            <Link className='link' to='/signup'>
            <span className='terms_condition02'> Sign Up</span>
            </Link>
             </p>
             <div className='space'></div>
            
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
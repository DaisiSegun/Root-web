import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function PasswordResset() {
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <div className='space'></div>

      <div className='sign_up_container'>
        <h5> Email Verification</h5>
        <h1 className='reset-note'>We sent an Email to reset your password: <span className='sms-to-num'>funkejohnson@gmail.com</span></h1>
        <form className='form'>
            <label className='verify-label'>Please input verifcation code</label>
            <input type='number' placeholder=''/>
            <img className='email' src='/images/email.gif'/>
            <Link to='/home'>
            <button className='button-blue'>Continue</button>
            </Link>
            
            <h1 className='resend-code'>Resend Code</h1> 
            
        </form>
      </div>
    </div>
  )
}

export default PasswordResset
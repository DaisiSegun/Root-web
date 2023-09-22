import React from 'react'

import './signup.css'
import { Link } from 'react-router-dom'

function  ChangePassword() {
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <div className='space'></div>

      <div className='sign_up_container'>
        <h5>Reset Password</h5>
        <h1 className='reset-note'>Enter the email asssociated with your account and we'll send you a link to reset your password.</h1>
        <form className='form'>
            
            <label>Email</label>
            <input type='email' placeholder='Email'/> 
            <Link to='/emailverification'>
            <button className='button-blue'>Send Instuctions</button>
            </Link>
            
             <div className='space'></div>
            
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
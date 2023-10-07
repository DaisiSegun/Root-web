import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function CreateNewPassword() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <div className='space3'></div>
      <div className='sign_up_container'>
        <h5>Create new password</h5>
        <h1 className='register_note'>Your new password must be different from previous used passwords</h1>
        <form className='form'>
            
            <label>Password</label>
            <input type='password' placeholder='Must be at least 8 characters.'/> 
            <label>Confirm Password</label>
            <input type='password' placeholder='Both passwords must match.'/> 
            
            <Link to='/home'>
            <button className='button-blue'>Continue</button>
            </Link>
           
             <div className='space'></div>
            
        </form>
      </div>
    </div>
  )
}
export default CreateNewPassword
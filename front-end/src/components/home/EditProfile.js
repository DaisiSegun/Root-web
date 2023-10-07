import React from 'react'

import './signup.css'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        
        <div className='space3'></div>
      <div className='sign_up_container'>
        <h5>Edit Your Profile</h5>

        <form className='form'>
        <div className='space3'></div>
            
            <label>Full Name</label>
            <input type='email' placeholder=''/> 

            <label>Email</label>
            <input type='text' placeholder=''/> 
            
            <label>Phone Number</label>
            <input type='text' placeholder=''/> 
            <div className='btn-container'>
              <button className='btn'>Save Changes</button>
              <button className='btn2'>Cancel</button>
            </div>

            <h5 className='change-pass'>Change Password Here</h5>
            <Link className='link' to='/changepassword'>
            <button className='btn-change'>Change Password</button>
            </Link>
           
           
            
             <div className='space'></div>
            
        </form>
      </div>
    </div>
  )
}
export default EditProfile
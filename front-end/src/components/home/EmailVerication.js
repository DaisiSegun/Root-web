import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function  EmailVerication() {
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <div className='space'></div>

      <div className='sign_up_container'>
        <img className='email' src='/images/email.gif'/>
        <h1 className='reset-note2'>We have sent a password recovery instruction to your email.</h1>
  
            <Link to='/createnewpassword'>
            <button className='button-blue'>Send Instuctions</button>
            </Link>

            <h1 className='resend-code'>Resend Instruction</h1>

    </div>
    </div>
  )
}
export default EmailVerication
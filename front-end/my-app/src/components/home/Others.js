import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Others() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       

      <div className='sign_up_container'>
        <h5 className='describe-h-text'>Can't find your iphone's problem?</h5>
        <h1 className='phone-number-note2'>Please tell us about your iphone's problem</h1>
        <form className='form'>
            <label>What is the issue with your device</label>
            <input type='text' />

            <label>Please describe issue here</label>
            <input className='decribe-issue' type='text' /> 

          
            
            <button className='button-blue'>Place order</button>
           
            
            
        </form>
      </div>
    </div>
  )
}

export default Others
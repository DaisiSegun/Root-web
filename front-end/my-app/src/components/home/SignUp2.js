import React from 'react'
import { Link } from 'react-router-dom'


function SignUp2() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <h1 className='header_step'>Step 2 of 3</h1>

      <div className='sign_up_container'>
        <h5>What's your phone number</h5>
        <h1 className='phone-number-note'>*Your alternate number can be your additonal number, family or close friend</h1>
        <form className='form'>
            <label>Phone number</label>
            <input type='number' placeholder='Phone number'/>

            <label>Alternate phone number 01</label>
            <input type='number' placeholder='Alternate phone number 01'/> 

            <label>Alternate phone number 02 (optional)</label>
            <input type='number' placeholder='Alternate phone number 02 (optional)'/> 

            <img className='verify-no-icon' src='./images/verify-number.svg'/>
            <p className='bold-info'>Verify your phone number</p>
            <Link to='/verifycode'>
            <button className='button-blue'>Send code via Sms</button>
            </Link>
            
            
            
        </form>
      </div>
    </div>
  )
}

export default SignUp2
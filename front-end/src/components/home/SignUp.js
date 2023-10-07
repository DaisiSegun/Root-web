import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup'

import './signup.css'





function SignUp() {
  const [fullName, setfullName] = useState ('')
  const [email, setEmail] = useState ('')
  const [phoneNumber, setphoneNumber] = useState ('')
  const [confirmPhoneNumber, setconfirmPhoneNumber] = useState ('')
  const [password, setpassword] = useState ('')
  const [confirmPassword, setconfirmPassword,] = useState ('')
  const {signup, error, message, isLoading} = useSignup()
 


  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(fullName, email,  password, phoneNumber, confirmPassword,  confirmPhoneNumber )
  }


  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <h1 className='header_step'>Step 1 of 2</h1>

      <div className='sign_up_container'>
        <h5>Register</h5>
        <h1 className='register_note'>Sign up now to get started with an account</h1>
        <h1 style={{ marginTop: '-0.5rem' }} className='phone-number-note'>*Please ensure you input your correct phone number so we can reach you fast & easily</h1>
        <form  className='form' onSubmit={handleSubmit}>
  
          <div className='field-container'>

            <label>Full name</label>
            <input type='text' placeholder='Full Name' 
            onChange={(e) => setfullName(e.target.value)} 
            value={fullName} 
            
            />
      
         </div>

         <div className='field-container'> 
         <label>Email</label>
            <input type='email' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            /> 
         
         </div>
            
          <div className='field-container'>
          
          <label>Phone Number</label>
            <input type='tel' placeholder='Please input country code (e.g +234)'
              onChange={(e) => setphoneNumber(e.target.value)} 
              value={phoneNumber} 
            />
            
          </div>
          <div className='field-container'>
          <label>Cofirm Phone Number</label>
            <input type='tel' placeholder='Please cross-check & input Phone Number '
              onChange={(e) => setconfirmPhoneNumber(e.target.value)} 
              value={confirmPhoneNumber} 
            />
            
          </div>
             
          <div className='field-container'>
          <label>Password</label>
            <input type='password' placeholder='Must be at least 8 characters.'
              onChange={(e) => setpassword(e.target.value)} 
              value={password} 
            /> 
            
          </div>
            
          <div className='field-container'>
          <label>Confirm Password</label>
            <input type='password' placeholder='Both Passwords must match'
             onChange={(e) => setconfirmPassword(e.target.value)} 
             value={confirmPassword} 
            />
            
          </div>
            

            
            <p className='terms'>By signing up you have agreed to <span className='terms_condition'>Our Terms of Use And Privacy Notice</span> </p>
            {error  && <div className="form-error">{error}</div>}
            {message  && <div className="form-success">{message}</div>}
            <input disabled ={isLoading} type='submit' value={'Register'} className='button-blue' ></input>
           
           
            </form>     

            <p className='terms02'>Already have an account?
            <Link to='/signin' className='link'>

            <span className='terms_condition02'>Login</span>
            </Link>
              </p>
              <div className='space'></div>
       
      </div>
    </div>
  )
};

export default SignUp
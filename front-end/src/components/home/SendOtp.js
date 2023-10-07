import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSignup } from '../../hooks/useSignup'
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function SendOtp() {
  const navigate = useNavigate();
const location =useLocation();   
 const [error, setError] = useState(null)
 const [message, setMessage] = useState(null)
 const [isLoading, setIsLoading] = useState(null)
 const id = location.state?.id;


 const handleClick = async() => {
   setIsLoading(true);
   setError(null)
   setMessage(null)

 
   try {
    const response = await fetch('/api/otpEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: location.state.id }),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.error);
    }

    // Save the user data to local storage
    localStorage.setItem('user', JSON.stringify(json));

    // Navigate to another route (e.g., '/sendotp') and pass data via location state
    navigate('/verifyotp');

    // Set a success message
    setMessage(json.message);

    // Update loading state
    setIsLoading(false);
  } catch (error) {
    // Handle errors
    setIsLoading(false);
    setError(error.message);
  }
};

  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <h1 className='header_step'>Step 2 0f 3</h1>

      <div className='sign_up_container'>
        <h5>Send Otp</h5>
        <h1 className='sms-to-text'>We will send a code to: <span className='sms-to-num3'>{id}</span></h1>
        <form className='form'>
           <img className='otp-img' src='/images/otp.svg'/>
        <button onClick={handleClick} disabled={isLoading}  className='button-blue'>Send Otp {isLoading ? 'Submitting...' : 'Submit'} </button>
        {error  && <div className="form-error">{error}</div>}
            {message  && <div className="form-success">{message}</div>} 
            <div className='space4'></div>   
           
        </form>
      </div>
    </div>
  )
}

export default SendOtp
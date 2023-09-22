import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

 function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const {login, error, message, isLoading} = useLogin()
 


  const handleSubmit = async (e) => {
    e.preventDefault()

    await login( email,  password)
  }


  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <h1 className='header_step'>Step 1 of 3</h1>

      <div className='sign_up_container'>
        <h5>Login</h5>
        <h1 className='register_note'>Welcome back! please enter your details</h1>
        <form  onSubmit={handleSubmit} className='form'>
            
            <label>Email</label>
            <input type='email' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            /> 

            <label>Password</label>
            <input type='password' placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            /> 

            <Link to='/forgotpassword' className='link'>
            <h1 className='forgot-password'>Forgot Password?</h1>
            </Link>
            
            {error  && <div className="form-error">{error}</div>}
            {message  && <div className="form-success">{message}</div>}
            <button disabled ={isLoading} type='submit' value={'Register'}className='button-blue'>Continue</button>
            
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

export default SignIn
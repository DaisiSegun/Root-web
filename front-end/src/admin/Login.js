import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './pages.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, navigate to the dashboard page
        console.log('Login successful');
        navigate('/dashboard'); // Redirect to the dashboard page
      } else {
        // Handle login failure, show an error message, etc.
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='signin-con'>
      <div className='sign-in'>
        <img className='sign_up_logo' src='./images/logo2.jpg' alt='Logo' />

        <div className='sign_up_container'>
          <h5 className='header-signin'>Admin Login</h5>
          <form className='form' onSubmit={handleLogin}>
            <label className='label1'>Email</label>
            <input
              className='input1'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className='label1'>Password</label>
            <input
              className='input1'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className='btn' type='submit'>
              Continue
            </button>

            <div className='space'></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

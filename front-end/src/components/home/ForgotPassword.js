import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './signup.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // To display the success or error message
  const navigate = useNavigate();
  const handleGetCode = async () => {
    try {
      const response = await axios.post('/api/forgot-password/verify-email', { email });

      // Handle the response, e.g., show a success message
      setMessage(response.data.message);
      navigate('/emailverification');

    } catch (error) {
      // Handle errors, e.g., show an error message
      setMessage(error.response.data.error);
    }
  }

  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png' />
      </Link>

      <div className='sign_up_container'>
        <h5>Reset Password</h5>
        <h1 className='reset-note'>Enter the email associated with your account, and we'll send you a link to reset your password.</h1>
        <form className='form'>
          <label>Email</label>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="button" className='button-blue' onClick={handleGetCode}>Resert Password</button>
          {message && <div className="message-container">{message}</div>}
          <p className='terms02'>Don't have an account?
            <Link className='link' to='/signup'>
              <span className='terms_condition02'> Sign Up</span>
            </Link>
          </p>
          <div className='space'></div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

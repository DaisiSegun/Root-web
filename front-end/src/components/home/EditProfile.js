import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './signup.css';

function EditProfile() {
  // Define state variables to store form field values and error/success messages
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null); // Error message state
  const [success, setSuccess] = useState(null); // Success message state

  const handleSaveChanges = async () => {
    try {
      const updatedUser = {
        fullName,
        email,
        password,
        confirmPassword,
        phoneNumber,
      };

      // Make the PUT request to update the user's profile
      const response = await axios.put('/api/update-user', updatedUser);

      // Handle the response
      if (response.data.message) {
        setSuccess(response.data.message);
        setError(null); // Clear any previous error message
      }

    } catch (error) {
      // Handle errors, e.g., set the error state with the error message
      setError(error.response.data.error);
      setSuccess(null); // Clear any previous success message
    }
  }

  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        
        <div className='space3'></div>
      <div className='sign_up_container'>
        <h5>Edit Your Profile</h5>

        {error && <div className="message-container">{error}</div>} {/* Display error message if there's an error */}
        {success && <div className="message-container1">{success}</div>} {/* Display success message if there's a success message */}

        <form className='form'>
        <div className='space3'></div>
            
            <label>Full Name</label>
            <input type='text' placeholder='' value={fullName} onChange={(e) => setFullName(e.target.value)} />

            <label>Email</label>
            <input type='email' placeholder='' value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label>Change Password</label>
            <input type='password' placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} />

            <label>Confirm password</label>
            <input type='password' placeholder='' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <label>Phone Number</label>
            <input type='text' placeholder='' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <div className='btn-container'>
              <button type="button" className='btn4' onClick={handleSaveChanges}>Save Changes</button>
            </div>

           
            
            <div className='space'></div>
            
        </form>
      </div>
    </div>
  );
}

export default EditProfile;

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios'; // Import Axios for making API requests

function ShippingAddress() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get('total');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    state: '',
    lga: '',
    city: '',
    house_address: '',
    alternatePhoneNumber: '',
    alternatePhoneNumber2: '',
  });

 console.log(formData.lga, formData.city);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const initiatePayment = async () => {
    try {
      // Make a POST request to initiate the payment
      const response = await axios.post('/api/initiate-payment', {
        amount: total,
        // Include other necessary data for payment initiation if required
      });

      // Handle the response, which may contain payment details or a redirect URL
      console.log('Payment initiation response:', response.data);

      if (response.data.status === 'success' && response.data.data.link) {
        // Redirect the user to the payment link
        window.location.href = response.data.data.link;
      } else {
        console.error('Payment initiation failed:', response.data.message);
        // Handle the failure, show an error message, or take appropriate action
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      // Handle the error, show an error message, or take appropriate action
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to send the form data to the billing_address API
      const response = await axios.post('/api/billing-details', formData);

      // Handle the response from the billing_address API
      if (response.status === 200) {
        // Billing address saved successfully, you can take further actions here
        // alert('Billing address saved successfully');
        
        // After saving the billing address, initiate the payment
        initiatePayment();
      }
    } catch (error) {
      console.error('Error saving billing address:', error);
      // Handle the error, show an error message, or take appropriate action
    }
  };

  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png' alt='Root Logo' />
      </Link>
      <div className='space3'></div>
      <div className='sign_up_container'>
        <h5>What's your Address</h5>
        <h1 className='phone-number-note'>*Your alternate number can be your additional number, family, or close friend</h1>
        <form onSubmit={handleSubmit} className='form'>
          <label>State</label>
          <input
            type='text'
            placeholder='Residential State'
            name='state'
            value={formData.state}
            onChange={handleInputChange}
          />

          <label>LGA</label>
          <input
            type='text'
            placeholder='Local Government Area'
            name='lga'
            value={formData.lga}
            onChange={handleInputChange}
          />

          <label>City</label>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={formData.city}
            onChange={handleInputChange}
          />

          <label>Street Name & House Number</label>
          <input
            type='text'
            placeholder='Street Name & House Number'
            name='house_address'
            value={formData.house_address}
            onChange={handleInputChange}
          />

          <label>Alternate phone number 01</label>
          <input
            type='number'
            placeholder='Alternate phone number 01'
            name='alternatePhoneNumber'
            value={formData.alternatePhoneNumber}
            onChange={handleInputChange}
          />

          <label>Alternate phone number 02 (optional)</label>
          <input
            type='number'
            placeholder='Alternate phone number 02 (optional)'
            name='alternatePhoneNumber2'
            value={formData.alternatePhoneNumber2}
            onChange={handleInputChange}
          />

          <p className='your-total'>Your payment total: ₦{total || 0}</p>
          <button type='submit' className='button-blue'>
            Continue
          </button>
          <div className='space'></div>
        </form>
      </div>
    </div>
  );
}

export default ShippingAddress;

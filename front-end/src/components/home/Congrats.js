import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './signup.css';

function Congrats() {
  const navigate = useNavigate();
  const [apiCallSuccessful, setApiCallSuccessful] = useState(false);

  const handleContinueClick = () => {
    // Function to decode query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get individual query parameters and decode them
    const status = decodeURIComponent(urlParams.get('status'));
    const tx_ref = decodeURIComponent(urlParams.get('tx_ref'));
    const transaction_id = decodeURIComponent(urlParams.get('transaction_id'));

    // Construct the API URL with query parameters
    const apiUrl = `https://walrus-app-quuss.ondigitalocean.app/api/v1/flutterwave?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`;
console.log( status, tx_ref, transaction_id)
console.log( apiUrl)
    // Make an API GET request to the constructed URL
    Axios.post(apiUrl)
      .then((response) => {
        // Handle the API response if necessary
        console.log(response.data); // You can replace this with your logic
        // Set the apiCallSuccessful state to true
        setApiCallSuccessful(true);

        // Navigate to a different route after a successful API response
        navigate('/');
      })
      .catch((error) => {
        // Handle any errors from the API call
        console.error(error);
      });
  };

  return (
    <div className='sign_up'>
      <div className='thank-you-container'>
        <h1 className='thank-you'>Thank you for choosing us</h1>
        <img className='love' src='/images/love.svg' alt="Love" />
      </div>
      <img className='congrats-gif' src='/images/congrats.gif' alt="Congrats GIF" />
      <p className='place-order'>
        Your order has been placed. Please call or message these numbers: +2349019971557, +2348069100884 to confirm your order
      </p>
      <button className='button-blue3' onClick={handleContinueClick}>Continue</button>
    </div>
  );
}

export default Congrats;

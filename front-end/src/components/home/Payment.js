import React from 'react'
import { Link } from 'react-router-dom'
function Payment() {
  return (
    <div className='sign_up'>
    <Link to='/'>
      <img className='sign_up_logo' src='./images/root-full-07.png'/>
      </Link>
      <div className='space3'></div>
    <div className='sign_up_container'>
      <h5>Payment Method</h5>
      <div className='payment-text-container'>
      <h1 className='register_note'>We accept</h1>
      <img src='/images/visa.jpg' className='payment-img'/>
      <img src='/images/mastercard.jpg' className='payment-img'/>
      
      </div>
      
      <form className='form'>
          <label>Name on Card</label>
          <input type='text' placeholder='Full name'/>

          <label>Card Number</label>
          <input type='number' placeholder='Card Number'/> 

          <label>Expire Date</label>
          <input type='text' placeholder='Expire Date'/> 
          
          <label>CVV</label>
          <input type='number' placeholder='3 digits'/>
         
          <Link to='/paymentsummary'>
          <button className='button-blue'>Continue</button>
          </Link>
            <div className='space'></div>
      </form>
    </div>
  </div>
  )
}

export default Payment
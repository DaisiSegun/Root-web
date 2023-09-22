import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css'
function ShippingAddress() {
  return (
    <div className='sign_up'>
      <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
        <div className='space3'></div>
      <div className='sign_up_container'>
        <h5>What's your Address & Alt Number</h5>
        <h1 className='phone-number-note'>*Your alternate number can be your additonal number, family or close friend</h1>
        <form className='form'>
            <label>State</label>
            <input type='text' placeholder='Residential State'/>

            <label>LGA</label>
            <input type='text' placeholder='Local Government Area'/> 

            <label>City</label>
            <input type='text' placeholder='City'/> 
            
            <label>House name & Street Number</label>
            <input type='password' placeholder='Street Name & Number'/>

            <label>Alternate phone number 01</label>
            <input type='number' placeholder='Alternate phone number 01'/> 

            <label>Alternate phone number 02 (optional)</label>
            <input type='number' placeholder='Alternate phone number 02 (optional)'/> 
           
            <Link to='/payment'>
            <button className='button-blue'>Continue</button>
            </Link>
              <div className='space'></div>
        </form>
      </div>
    </div>
  )
}

export default ShippingAddress
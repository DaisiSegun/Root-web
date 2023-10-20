import React from 'react'
import './signup.css'
import './main.css'
import { Link } from 'react-router-dom'

function Others() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       

      <div className='sign_up_container'>
        <h5 className='describe-h-text'>Can't find your iPhone repair?</h5>
        <div className='space3'></div>
        <Link className='link5' to='whatsapp://send?phone=+2349019971557'>  
          <button className='nav-button2'>
          <div className='split-customer1'>
            <span>Reach us on whatsapp</span>
            <img src='/images/chat-us.svg'/>
            <span className='nav-reach'>+2349019971557</span>
            </div>
          </button>
          
          </Link>
         
      </div>
      <label className='not-cus'>Please reach out to us. We will find your repair and give you a quotation</label>
    </div>
  )
}

export default Others
{/* <form className='form'>
<label>What is the issue with your device</label>
<input type='text' />

<label>Please describe issue here</label>
<input className='decribe-issue' type='text' /> 



<button className='button-blue'>Place order</button>



</form> */}
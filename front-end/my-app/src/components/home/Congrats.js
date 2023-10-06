import React from 'react'
    
import './signup.css'
import { Link } from 'react-router-dom'
function Congrats() {
  return (
    <div className='sign_up'>
      <div className='thank-you-container'>
        <h1 className='thank-you'>Thank you for choosing us</h1>
        <img className='love' src='/images/love.svg'/>
      </div>
      <img className='congrats-gif' src='/images/congrats.gif'/>
      <p className='place-order'>Your order has been placed. Please call or message these numbers: 09019971557, 090177615 to confirm your order </p>
      <Link className='link' to='/'>
      <button className='button-blue3'>Go Home</button>
      </Link>
      
    </div>
  )
}

export default Congrats
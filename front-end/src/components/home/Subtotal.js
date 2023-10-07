import React from 'react'
import './delivery.css'
import { Link } from 'react-router-dom'
function Subtotal({price}) {
  return (
    <div className='subtotal-container'> 
      
      <div className='subtotal-description' >
      <h1 className='subtotal-text'>Subtotal</h1>
      <div className='delivery-price'>
          <small className='delivery-small'> ₦</small>
          <strong className='delivery-strong'>{price}</strong>
     </div>
      </div>
      <Link className='link' to='/shippingaddress'>
      <button className='subtotal-button'>Proceed to Checkout (2 items)</button>
      </Link>
      
    </div>
  )
}

export default Subtotal
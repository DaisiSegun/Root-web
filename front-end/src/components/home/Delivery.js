import React from 'react'
import './delivery.css'
function Delivery({price, title}) {
  return (
    <div className='delivery-container'> 
      <h1 className='delivery-text'>Pick up and deliver anywhere in Lagos</h1>
      <div className='delivery-container2'>
        <div className='delivery-location'>
          <p className='delivery-title'>{title}</p>
     <div className='subtotal-price'>
          <small className='subtotal-small'> ₦</small>
          <strong className='subtotal-strong'>{price}</strong>
     </div>
        </div>
        <button className='delivery-icon'>Remove</button>
      </div>
    </div>
  )
}

export default Delivery
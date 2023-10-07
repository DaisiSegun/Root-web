import React from 'react'
import './delivery.css'
function SubtotalSummary({price}) {
  return (
    <div>
      <div className='subtotal-description' >
      <h1 className='subtotal-text'>Subtotal</h1>
      <div className='delivery-price'>
          <small className='delivery-small'> ₦</small>
          <strong className='delivery-strong'>{price}</strong>
     </div>
      </div>
    </div>
  )
}

export default SubtotalSummary
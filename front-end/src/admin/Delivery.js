import React from 'react'

function Delivery({price}) {
  return (
    <div className='order-pro'>
      <div className='delivery-con'>
        <p>Delivery</p>
        <div className='price'> 
            <small className='naira-icon'>₦</small>
            <strong className='strong-naira'>{price}</strong>
          </div>
          
      </div>
    </div>
  )
}

export default Delivery
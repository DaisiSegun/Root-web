import React from 'react'

function DeliveryTotal({price}) {
  return (
    <div className='order-pro'>
      <div className='delivery-con'>
        <strong>Total paid by Customer:</strong>
        <div className='price'> 
            <small className='naira-icon'>₦</small>
            <strong className='strong-naira'>{price}</strong>
          </div>
          
      </div>
    </div>
  )
}

export default DeliveryTotal
import React from 'react'
import './pages.css'

function OrderedProduct({image, title, price}) {
  return (
    <div>
      <div className='order-product-container'>
        <img className='order-image' src={image}/>
        <div className='price2'> 
          <p>{title}</p>
          <div className='price'> 
            <small className='naira-icon'>₦</small>
            <strong className='strong-naira'>{price}</strong>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OrderedProduct
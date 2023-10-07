import React from 'react'
import './productsummary.css'
function ProductSummary({title, price}) {
  return (
    
      <div className='summary-container'>
        <p className='summary-title'>{title}</p>
        <div>
          <small className='summary-small'>₦</small>
          <strong className='summary-strong'>{price}</strong>
        </div>
      </div>
   
  )
}

export default ProductSummary
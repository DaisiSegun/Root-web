import React from 'react'
import './productpage.css'

function ProductPageDescrip({title, price}) {
  return (
    <div className='product-des-container'>
      <h1 className='product-title'>{title}</h1>
      <div className='product-price'>
        <small className='product-small'>₦</small>
        <strong className='product-strong'>{price}</strong>
      </div>
    </div>
  )
}

export default ProductPageDescrip
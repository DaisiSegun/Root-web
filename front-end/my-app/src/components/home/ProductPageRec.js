import React from 'react'
import './delivery.css'
function ProductPageRec({image, title, price}) {
  return (
    <div className='recomendation-container'>
      <img src={image} className='rec-img'/>
      <div className='rec-des-container'>
        <div className='rec-name-price'>
          <h1 className='rec-title'>{title}</h1>
          <div className='deli-price'>
      <small className='product-small'>₦</small>
        <strong className='product-strong'>{price}</strong>
      </div>
        </div>
        <button className='plus-icon'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPageRec
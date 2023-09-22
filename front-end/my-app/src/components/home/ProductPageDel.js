import React from 'react'
import './productpage.css'
function ProductPageDel() {
  return (
    <div className='del-final-con'>
       <div className='product-del-container'>
      <h1 className='deli-title'></h1>
      <div className='deli-price'>
      <small className='product-small'>₦</small>
        <strong className='product-strong'></strong>
      </div>
    </div>
    <button className='plus-icon'>Add to Cart</button>
    </div>
  )
}

export default ProductPageDel
import React from 'react'
import './screencat.css'

function ScreenCat({title, image, price}) {
  return (
    <div className='product-category'>
      
       
       <img className='cat-img' src={image}/>
       <p className='cat-p'> {title}</p>
      <div className='cat-price'>
          <small> ₦</small>
           <strong>{price}</strong>
        </div>
        
      
    </div>
  )
}

export default ScreenCat
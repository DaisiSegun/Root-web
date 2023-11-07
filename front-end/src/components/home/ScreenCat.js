import React from 'react'
import './screencat.css'

function ScreenCat({title, image, price}) {
  return (
    <div className='product-category'>
      
       
       <img className='cat-img' src={image}/>
       <p className='cat-p'> {title}</p>
      <div className='cat-price'>
          <small> ₦</small>
           <small>{price}</small>
        </div>
        
      
    </div>
  )
}

export default ScreenCat
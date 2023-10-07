import React from 'react'
import './screencat.css'
import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className='product-category'>
      
     <Link className='link' to={`/product/${item._id}`}>
       <img className='cat-img' src={item.avatar}/>
       <p className='cat-p'> {item.name}</p>
      <div className='cat-price'>
          <small> ₦</small>
           <strong>{item.price}</strong>
        </div>  
     </Link>
      
    </div>
  )
}

export default Product;
import React from 'react'
import './screencat.css'
import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className='product-category'>
      
     <Link className='link' to={`/product/${item._id}`}>
      <div className='fus'>
       {/* <img className='cat-img' src={item.avatar}/> */}
       <p className='cat-p'> {item.name}</p>
      <div className='cat-price'>
          <small className='smalli'> ₦</small>
           <small className='smalli'>{item.price}</small>
        </div> 
        </div> 
     </Link>
      
    </div>
  )
}

export default Product;
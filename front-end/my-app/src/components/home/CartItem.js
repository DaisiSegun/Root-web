import React from 'react'
import './searchresult.css'
import './main.css'
import Header from '../header/Header'



function CartItem({item}) {
  return (  
    <div id={item._id} className='search-col'>
    <div className='search-container'> 
    <img src={item.avatar} className='search-img'/>

  <div className='search-description'> 
  <p className='search-title'> {item.name} </p>
  <div className='search-price'>
    <small> ₦</small>
    <strong>{item.price}</strong>
  </div>
  <button className='cart-button'>Remove</button>
  </div>
    
  </div>
       
      </div>
  
  )
}

export default CartItem
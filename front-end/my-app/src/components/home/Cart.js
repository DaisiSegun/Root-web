import React from 'react'
import './searchresult.css'
import './main.css'
import Header from '../header/Header'
import Delivery from './delivery.css'
import Subtotal from './Subtotal'


function Cart() {
  return (
    <div>
      <div className='main'>
      <Header/>
      <hr className='line'></hr>
      <h5 className='search-header'>Cart</h5>
      
      <div className='search-col'>
      <div className='search-container'> 
    <img className='search-img'/>

  <div className='search-description'> 
  <p className='search-title'> </p>
  <div className='search-price'>
    <small> ₦</small>
    <strong></strong>
  </div>
  <button className='cart-button'>Remove</button>
  </div>
    
  </div>
       
      </div>
      
      <div className='subtotal-description' >
      <h1 className='subtotal-text'>Subtotal</h1>
      <div className='delivery-price'>
          <small className='delivery-small'> ₦</small>
          <strong className='delivery-strong'></strong>
     </div>
      </div>
     
      <button className='button'>Proceed to Checkout (2 items)</button>
      
      </div>
    </div>
  )
}

export default Cart
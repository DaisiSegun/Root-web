import React from 'react'
import './searchresult.css'
import './main.css'
import Header from '../header/Header'
import CartProduct from './CartProduct'
import Delivery from './Delivery'
import Subtotal from './Subtotal'


function Cart() {
  return (
    <div>
      <div className='main'>
      <Header/>
      <hr className='line'></hr>
      <h5 className='search-header'>Cart</h5>
      <div className='search-col'>
       <CartProduct
       title={'Iphone 7 Charging-Port'}
       price={`25,000`}
       image={'images/charging-port.png'}
       />
       
      </div>
      
      <Subtotal
        price={`55,000`}
      />
      </div>
    </div>
  )
}

export default Cart
import React from 'react'

import './signup.css'
import ProductSummary from './ProductSummary'

import { Link } from 'react-router-dom'
import OrderHistoryDeets from './OrderHistoryDeets'

function OrderHistory() {
  return (
    <div className='sign_up'>
       <Link to='/'>
        <img className='sign_up_logo' src='./images/root-full-07.png'/>
        </Link>
       
        <input className='search-order' type='text' placeholder='Search Order'/>
       
        
       
      <div>
      <h1 className='order-details'>Order 1022 <p>14/07/2023</p></h1>
       <OrderHistoryDeets/>
      
      </div>
      <hr className='line'></hr>
      
      <div>
      <h1 className='order-details'>Order 1022 <p>14/07/2023</p></h1>
       <OrderHistoryDeets/>
      
      </div>
    </div>
  )
}
export default OrderHistory
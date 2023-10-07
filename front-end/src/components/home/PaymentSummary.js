import React from 'react'
import CartProduct from './CartProduct'
import './signup.css'
import ProductSummary from './ProductSummary'
import Subtotal from './Subtotal'
import SubtotalSummary from './SubtotalSummary'
import ShipAddSum from './ShipAddSum'
import { Link } from 'react-router-dom'
function PaymentSummary() {
  return (
    <div className='sign_up'>

      <h1 className='order-details'>Order Details</h1>

      <div className='ps-container' >
      <h1 className='summary-cart'>Cart</h1>
      <ProductSummary
      title={'Iphone X screen'}
      price={`30,000`}
      />
      <ProductSummary
      title={'Privacy Screen'}
      price={`4,500`}
      />
      <ProductSummary
      title={'Mainland'}
      price={`4,000`}
      />
      <SubtotalSummary
      price={`55,000`}
      />
      
      </div>
      <div className='ps-container' >
      <h1 className='summary-cart'>Shipping Adress</h1>
      <ShipAddSum/>
      </div>
      <Link className='link' to='/congrats'>
      <button className='button-blue2'>Place order</button>
      </Link>
     
    </div>
  )
}

export default PaymentSummary
import React from 'react'
import ProductSummary from './ProductSummary'
import Subtotal from './Subtotal'
import SubtotalSummary from './SubtotalSummary'
import ShipAddSum from './ShipAddSum'
function OrderHistoryDeets() {
  return (
    <div>
      

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
      
      </div>
  )
}

export default OrderHistoryDeets
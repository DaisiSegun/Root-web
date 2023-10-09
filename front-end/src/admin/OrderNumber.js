import React from 'react'
import './pages.css'
function OrderNumber({orderNo}) {
  return (
    <div>
      <h1 className='header'>{orderNo}</h1>
    </div>
  )
}

export default OrderNumber
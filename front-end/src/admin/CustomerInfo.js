import React from 'react'
import './pages.css'
function CustomerInfo({title, email, no, altNo, address}) {
  return (
    <div className='customer-info'>
      <h1 className='customer'>Customer</h1>
      <p className='customer-text'>{title}</p>
      <hr className='line'></hr>
      <h1 className='customer'>Contact Info</h1>
      <p className='customer-text'>{email}</p>
      <p className='customer-text'>{no}</p>
      <p className='customer-text'>{altNo}</p>
      <hr className='line'></hr>
      <h1 className='customer'>Address</h1>
      <p className='customer-address'>{address}</p>
    </div>
  )
}

export default CustomerInfo
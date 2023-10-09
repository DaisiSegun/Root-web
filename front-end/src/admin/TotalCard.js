import React from 'react'
import './pages.css'

function TotalCard({images, title, price, colour, }) {
  return (
    <div className='total-container'>
      <div className='total-round' style={{backgroundColor: colour}}>
        
        <img className='naira' src={images}/>
      </div>
      <div className='price-container'>
      <p className='title'>{title}</p>
        <div className='price'>
          <small className='naira-icon'>₦</small>
          <strong className='strong-naira'>{price}</strong>
        </div>
      </div>
        
    </div>
  )
}

export default TotalCard
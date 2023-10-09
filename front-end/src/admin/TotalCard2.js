import React from 'react'
import './pages.css'

function TotalCard2({images, title, price, colour, }) {
  return (
    <div className='total-container'>
      <div className='total-round' style={{backgroundColor: colour}}>
        
        <img className='naira' src={images}/>
      </div>
      <div className='price-container'>
      <p className='title'>{title}</p>
        <div className='price'>
          <strong className='strong-naira'>{price}</strong>
        </div>
      </div>
        
    </div>
  )
}

export default TotalCard2
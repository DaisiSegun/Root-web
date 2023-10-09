import React from 'react'
import './pages.css'
function InventoryCard({no, image, title, price}) {
  return (
    <div className='inventory-card'>
      <div className='inventory-con'>
        <p>{no}</p>
        <img className='inventory-img' src={image}/>
        <p>{title}</p>
        <div className='price'>
          <small className='naira-icon'>₦</small>
          <strong className='strong-naira'>{price}</strong>
        </div>
      </div>
    </div>
  )
}

export default InventoryCard
import React from 'react'
import './Sugrepair.css'
function Sugrepair({title, image, price}) {
  return (
    <div>
      <div className='middle-section'>
          <div>
            <div>
              <img className='sug-img' src={image}/>
              <p >{title}</p>
              <p className='repair-price'>
                <small>₦</small>
                <strong>{price}</strong>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sugrepair
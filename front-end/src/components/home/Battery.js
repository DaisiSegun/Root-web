import React from 'react'
import './main.css'
import ScreenCat from './ScreenCat'
import Header2 from '../header/Header2'
function Battery() {
  return (
    <div className='main'>
      <Header2/>
      <hr className='line'></hr>
      <h5 className='cat-header'>Battery</h5>
      <div className='cat-row'>
        <ScreenCat
          title={'Iphone 14 battery'}
          price={`21,000`}
          image={'images/iphone-battery.png'}
        />
        <ScreenCat
          title={'Iphone 14 battery'}
          price={`21,000`}
          image={'images/iphone-battery.png'}
        />
      </div><div className='cat-row'>
        <ScreenCat
          title={'Iphone 14 battery'}
          price={`21,000`}
          image={'images/iphone-battery.png'}
        />
        <ScreenCat
          title={'Iphone 14 battery'}
          price={`21,000`}
          image={'images/iphone-battery.png'}
        />
      </div>
      
    </div>
  )
}

export default Battery
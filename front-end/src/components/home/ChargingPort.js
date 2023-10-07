import React from 'react'
import Header2 from '../header/Header2'
import './main.css'
import ScreenCat from './ScreenCat'
function ChargingPort() {
  return (
    <div className='main'>
      <Header2/>
      <hr className='line'></hr>
      <h5 className='cat-header'>Charging Port</h5>
      <div className='cat-row'>
        <ScreenCat
          title={'Iphone 7 Charging-Port'}
          price={`25,000`}
          image={'images/charging-port.png'}
        />
        <ScreenCat
          title={'Iphone 7 Charging-Port'}
          price={`25,000`}
          image={'images/charging-port.png'}
        />
      </div><div className='cat-row'>
        <ScreenCat
          title={'Iphone 7 Charging-Port'}
          price={`25,000`}
          image={'images/charging-port.png'}
        />
        <ScreenCat
          title={'Iphone 7 Charging-Port'}
          price={`25,000`}
          image={'images/charging-port.png'}
        />
      </div>
      
    </div>
  )
}

export default ChargingPort
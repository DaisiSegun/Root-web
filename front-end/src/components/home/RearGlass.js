import React from 'react'
import Header2 from '../header/Header2'
import './main.css'
import ScreenCat from './ScreenCat'
function RearGlass() {
  return (
    <div className='main'>
    <Header2/>
    <hr className='line'></hr>
    <h5 className='cat-header'>Back Glass</h5>
    <div className='cat-row'>
      <ScreenCat
        title={'Iphone 11 Rear Glass'}
        price={`30,0000`}
        image={'images/rearglass.png'}
      />
      <ScreenCat
       title={'Iphone 11 Rear Glass'}
       price={`30,0000`}
       image={'images/rearglass.png'}
      />
    </div><div className='cat-row'>
      <ScreenCat
       title={'Iphone 11 Rear Glass'}
       price={`30,0000`}
       image={'images/rearglass.png'}
      />
      <ScreenCat
        title={'Iphone 11 Rear Glass'}
        price={`30,0000`}
        image={'images/rearglass.png'}
      />
    </div>
    
  </div>
  )
}

export default RearGlass
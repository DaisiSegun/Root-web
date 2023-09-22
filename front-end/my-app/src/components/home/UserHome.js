import React from 'react'
import Header2 from '../header/Header2'
import './main.css'
import Sugrepair from './Sugrepair'
import Nav from './Nav'
import {Link} from 'react-router-dom'

function UserHome() {
  return (
    <div className='main' >
      <Header2/>
      <hr className='line'></hr>
       <Nav/>
    <div className='main-row'>
      <Sugrepair 
          title='Iphone X Screen'
          price={`36,000`}
          image= {'images/iphone-xsug.jpg'}
       />
       <Sugrepair 
          title='Iphone X Screen'
          price={`36,000`}
          image= {'images/iphone-xsug.jpg'}
       />
    </div>

    <div className='main-second-row'>
      <Sugrepair 
          title='Iphone X Screen'
          price={`36,000`}
          image= {'images/iphone-xsug.jpg'}
       />
       <Sugrepair 
          title='Iphone X Screen'
          price={`14,000`}
          image= {'images/iphone-xsug.jpg'}
       />
    </div>
    <div className='space'></div>
    </div>
  )
}

export default UserHome
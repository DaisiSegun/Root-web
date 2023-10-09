import React from 'react'
import './pages.css'
import './sidebar.css'

import Sidebar from './Sidebar'
import OrderNumber from './OrderNumber'
import OrderedProduct from './OrderedProduct'
import Delivery from './Delivery'
import DeliveryTotal from './DeliveryTotal'
import CustomerInfo from './CustomerInfo'
function Other() {
  return (
    <div className='sidebar'>
      <Sidebar/>
      <div className='upload'>
      <OrderNumber orderNo={`Order #10002`}/>

      <div className='other'>
      <hr className='line2'></hr>
      <h1 className='customer'>Phone Issue</h1>
     <label className='other-input' >My iphone entered water</label> 
     <h1 className='customer'>Description</h1>
     <label className='other-input' >I don’t know what's wrong with my phone its not coming on and its not charging  </label> 
      </div>
     
      </div>
     <div className='customer-info-con'>
      <CustomerInfo
      title={'Funke Johnson'}
      email={`funkejohnson88@gmail.com`}
      no={`09019971667`}
      altNo={`08035834366`}
      address={`Plot 38 Court peace estate, Plot 40, Ikeja, Lagos`}
      />
     </div>
    </div>
  )
}

export default Other
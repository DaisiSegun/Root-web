import React from 'react'
import './pages.css'
import './sidebar.css'

import Sidebar from './Sidebar'
import OrderNumber from './OrderNumber'
import OrderedProduct from './OrderedProduct'
import Delivery from './Delivery'
import DeliveryTotal from './DeliveryTotal'
import CustomerInfo from './CustomerInfo'
function Order() {
  return (
    <div className='sidebar'>
      <Sidebar/>
      <div className='upload'>
      <OrderNumber orderNo={`Order #10002`}/>
      <div className='order-pro'>
        <div className='order-status'>
          <div className='circle'></div>
          <p className='p-d'>Pending</p>
        </div>
      <OrderedProduct
     title={'iphone 14 Screen'}
     image={'./images/iphone14-o.jpg'}
     price={`43,000`}
     />
      <OrderedProduct
     title={'Privacy Screen Gaurd'}
     image={'./images/privacy.jpg'}
     price={`3,000`}
     />
      </div>

      <Delivery
      price={`3,000`}
      />
      <DeliveryTotal
      price={`46,000`}/>
    
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

export default Order
import React from 'react'
import Search from './Search'
import Sidebar from './Sidebar'
import InventoryCard from './InventoryCard'

function Inventory() {
  return (

    <div className='sidebar'>
    <Sidebar/>
    <div className='upload'>
      <Search/>
      <h1 className='header2'>All Inventory</h1>
      <InventoryCard
      no={`1.`}
      image={'./images/iphonex.jpg'}
      title={`iphone 14 screen`}
      price={`45,000`}
      />
      <InventoryCard
      no={`2.`}
      image={'./images/iphonex.jpg'}
      title={`iphone 14 screen`}
      price={`45,000`}
      />
      <InventoryCard
      no={`3.`}
      image={'./images/iphonex.jpg'}
      title={`iphone 14 screen`}
      price={`45,000`}
      />
    </div>
    </div>

  )
}

export default Inventory
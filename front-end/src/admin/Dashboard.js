import React from 'react'
import './pages.css'
import TotalCard from './TotalCard'
import TotalCard2 from './TotalCard2'
import StatsNumber from './StatsNumber'
import LatestOrders from './LatestOrders'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your API when the component mounts
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/all-orders'); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setOrders(data); // Update the orders state with the fetched data
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  return (
    <div className='sidebar'>
      <Sidebar/>
        <div className='dashboard'>
        <h1 className='headerr'>Dashboard</h1>
        <div className='latest-orders-col'>
            {orders.map((order) => (
              <Link key={order._id} to={`/orderno/${order._id}`}>
                <LatestOrders order={order} />
              </Link>
            ))}
          </div>
{/* 
    <div className='total-card-row'>
    <TotalCard
      images={'./images/naira.svg'}
      colour={`#FFA011`}
      title={'Total Sales'}
      price={`178,000,000`}
      />

    <TotalCard2
     images={'./images/cart.svg'}
     colour={`#8FDD66`}
     title={'Total Orders'}
     price={`4,500`}
    />

    <TotalCard2
     images={'./images/products.svg'}
     colour={`#3B95ED`}
     title={'Total Products'}
     price={`478`}
    />
    </div> */}
   
      {/* <div className='stats-container'>
        <div className='stats-header'>
          <img src='./images/stats.svg' className='stats-icon'/>
          <p className='root-stats'>Root Stats</p>
      </div>


    <div className='stat-col'>
          <div className='user-stat-conatainer'>
            <div className='user-stat-text'>Number of users that visited</div>
            <StatsNumber statnumber={`1000`}/>
          </div>

          <div className='user-stat-conatainer'>
            <div className='user-stat-text'>Number of users that Registed</div>
            <StatsNumber statnumber={`750`}/>
          </div>
          <div className='user-stat-conatainer'>
            <div className='user-stat-text'>Number of users that purchased</div>
            <StatsNumber statnumber={`560`}/>
          </div>
    </div>
      

    </div> */}
{/* 
     <div className='stats-container'>
     <h1 className='header2'>Latest Orders</h1>
     <div className='latest-orders-col'>
 
     </div>
     
     </div> */}
  
    </div>
  
    </div>
    
  )
}

export default Dashboard
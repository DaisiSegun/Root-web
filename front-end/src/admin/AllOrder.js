import React, { useState, useEffect } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import LatestOrders from './LatestOrders';
import { Link } from 'react-router-dom';

function AllOrder() {
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
      <Sidebar />
      <div className='upload'>
       
        <h1 className='header3'>All Orders</h1>
        <div className='space'></div>
        <div className='stats-container'>
          <div className='latest-orders-col'>
            {orders.map((order) => (
              <Link key={order._id} to={`/orderno/${order._id}`}>
                <LatestOrders order={order} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrder;

import React, { useState, useEffect } from 'react';

function Apitest() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    // Fetch all orders when the component mounts
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await fetch('/api/all-orders'); // Replace with your actual API endpoint
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order.orderId}<br />
            Customer Name: {order.customer.name}<br />
            Customer Email: {order.customer.email}<br />
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apitest;

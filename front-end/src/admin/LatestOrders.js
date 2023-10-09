import React from 'react';

function LatestOrders({ order }) {
  const {
    orderId,
    customer,
    orderedItems,
    shippingAddress,
    totalPricePaid,
  } = order || {};

  const phoneNumbers = [
    customer?.phoneNumber,
    customer?.alternatePhoneNumber,
    customer?.alternatePhoneNumber2,
  ];

  const spanStyle = { color: 'blue' }; // Define the common style for text elements

  return (
    <div className='link3'>
      <div className='wrap1'>
      <div className='order-card3'>
        <p className='time3'>
          Order ID: <span style={spanStyle}>{orderId}</span>
        </p>
        <p className='name3'>
          Customer Name: <span style={spanStyle}>{customer?.name}</span>
        </p>
        <p className='email3'>
          Customer Email: <span style={spanStyle}>{customer?.email}</span>
        </p>
        <div className='price3'>
          <small className='order-icon3'>Price:</small>
          <p className='strong-order3'>₦{totalPricePaid}</p>
        </div>
        <div className='shipping-address3'>
          <p>Shipping Address:</p>
          <p>
            State: <span style={spanStyle}>{shippingAddress?.state}</span>
          </p>
          <p>
            LGA: <span style={spanStyle}>{shippingAddress?.lga}</span>
          </p>
          <p>
            City: <span style={spanStyle}>{shippingAddress?.city}</span>
          </p>
          <p>
            Address: <span style={spanStyle}>{shippingAddress?.address}</span>
          </p>
          <p>
            Alt No: <span style={spanStyle}>{shippingAddress?.alternatePhoneNumber}</span>
          </p>
          <p>
            Alt No2: <span style={spanStyle}>{shippingAddress?.alternatePhoneNumber2}</span>
          </p>
        </div>
        <div className='phone-numbers3'>
          <p>Phone Number:</p>
          <ul>
            {phoneNumbers.map((phoneNumber, index) => (
              <li key={index}>{phoneNumber}</li>
            ))}
          </ul>
        </div>
        <ul className='ordered-items3'>
          <p>Ordered Items:</p>
          {orderedItems?.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: {item.price}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default LatestOrders;

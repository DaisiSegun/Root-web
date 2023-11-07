import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import Header from '../header/Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, handleRemoveCartItem, fetchCartData } = useContext(CartContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  // const fetchCartData = () => {
  //   axios
  //     .get('/api/cart/view')
  //     .then((response) => {
  //       // setCartData({
  //       //   cartItems: response.data, // Assuming the API response contains the cart items
  //       //   subtotal: response.data.cartTotal, // Assuming cartTotal is in the response
  //       //   error: null, // Reset error
  //       // });
  //     })
  //     .catch((err) => {
  //       setError('No cart data: ' + err.response?.data.error || 'An error occurred.');
  //       console.error(err);
  //     });
  // };

  // Use useEffect to fetch cart data when the component mounts
  useEffect(() => {
    fetchCartData();
  }, []);



  return (
    <div className='main'>
      <Header />
      {/* <hr className='line' /> */}
      <h5 className='search-header'>Cart</h5>
      <div>
      {/* <div className='red-box2'>
  <h3>Please Reload or Refresh this page if your cart is not updated.</h3>
  </div> */}
        {cartItems.selectedProducts && cartItems.selectedProducts.length > 0 ? (
          cartItems.selectedProducts.map((item) => (
            <CartItem key={item._id} item={item} />
          ))
        ) : (
          <p className='no-item'>No items in the cart.</p>
        )}
        <div className='subtotal-description'>
          <h1 className='subtotal-text'>Total Cart Price</h1>
          <div className='delivery-price'>
            <small className='delivery-small'>₦</small>
            <strong className='delivery-strong'>{cartItems.cartTotal || 0}</strong>
          </div>
          <Link className='link' to={`/shippingaddress?total=${cartItems.cartTotal || 0}`}>
            <button className='button'>Proceed to Checkout</button>
          </Link>
        </div>
        {error && <p className='error-cart'>{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
}

export default Cart;
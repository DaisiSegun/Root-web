import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import Header from '../header/Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, handleRemoveCartItem } = useContext(CartContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(cartItems);

  const fetchCartData = () => {
    axios
      .get('/api/cart/view')
      .then((response) => {
        // Update cart data here
      })
      .catch((err) => {
        setError('No cart data: ' + err.response?.data.error || 'An error occurred.');
        console.error(err);
      });
  };

  // Use useEffect to fetch cart data when the component mounts
  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    // Check if the page has already been refreshed
    const hasRefreshed = localStorage.getItem('hasRefreshed');

    if (!hasRefreshed) {
      // If the page hasn't been refreshed yet, refresh it once
      localStorage.setItem('hasRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className='main'>
      <Header />
      <hr className='line' />
      <h5 className='search-header'>Cart</h5>
      <div>
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

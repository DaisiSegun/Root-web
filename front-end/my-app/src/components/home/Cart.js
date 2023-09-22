import React, { useEffect, useState } from 'react'; // Import useState
import { useCart } from './CartContext';
import axios from 'axios';
import './searchresult.css';
import './main.css';
import Header from '../header/Header';

function Cart() {
  const { cartItems, subtotal, error, updateCartItemCount, handleRemoveCartItem } = useCart();
  
  const [localError, setLocalError] = useState(null); // Define local error state
  
  useEffect(() => {
    // Fetch cart items from the backend API when the Cart component mounts
    axios.get('/api/cart/items')
      .then((response) => {
        const fetchedCartItems = response.data;
        updateCartItemCount(fetchedCartItems.length); // Update the cart item count in the context
      })
      .catch((err) => {
        setLocalError('Error fetching cart items'); // Set the local error state
        console.error(err);
      });
  }, []);

  // Function to handle removing a cart item
  const handleRemoveCartItemFromApi = (itemId) => {
    // Make an API request to remove the item from the cart
    axios.delete(`/api/cart/items/${itemId}`)
      .then((response) => {
        // Update the cart item count in the context based on the response
        updateCartItemCount(response.data.cartItemCount);
      })
      .catch((err) => {
        setLocalError('Error removing cart item'); // Set the local error state
        console.error(err);
      });
  };

  // Function to handle adding a cart item
  const handleAddCartItem = (itemId) => {
    // Make an API request to add the item to the cart
    axios.post(`/api/cart/add/${itemId}`)
      .then((response) => {
        // Update the cart item count in the context based on the response
        updateCartItemCount(response.data.cartItemCount);
      })
      .catch((err) => {
        setLocalError('Error adding cart item'); // Set the local error state
        console.error(err);
      });
  };

  return (
    <div>
      <div className='main'>
        <Header />
        <hr className='line' />
        <h5 className='search-header'>Cart</h5>

        <div className='search-col'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className='search-container'>
                <img className='search-img' src={item.imageUrl} alt={item.title} />

                <div className='search-description'>
                  <p className='search-title'>{item.title}</p>
                  <div className='search-price'>
                    <small>₦</small>
                    <strong>{item.price}</strong>
                  </div>
                  <button
                    className='cart-button'
                    onClick={() => handleRemoveCartItemFromApi(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className='cart-button'
                    onClick={() => handleAddCartItem(item.id)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {subtotal !== null && (
          <div className='subtotal-description'>
            <h1 className='subtotal-text'>Subtotal</h1>
            <div className='delivery-price'>
              <small className='delivery-small'>₦</small>
              <strong className='delivery-strong'>{subtotal}</strong>
            </div>
          </div>
        )}

        <button className='button'>Proceed to Checkout ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</button>
        {localError && <p>{localError}</p>} {/* Display local error */}
      </div>
    </div>
  );
}

export default Cart;

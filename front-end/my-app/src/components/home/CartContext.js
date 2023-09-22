// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios or your preferred HTTP library

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(null);
  const [error, setError] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0); // Initialize cartItemCount to 0

  // Fetch cart items and subtotal when the component mounts
  useEffect(() => {
    // Fetch cart items from the backend API
    axios.get('/api/cart/items')
      .then((response) => {
        const fetchedCartItems = response.data;
        setCartItems(fetchedCartItems);
        setCartItemCount(fetchedCartItems.length); // Set cartItemCount to the number of items
      })
      .catch((err) => {
        setError('Error fetching cart items');
        console.error(err);
      });

    // Fetch subtotal from the backend API
    axios.get('/api/cart/subtotal')
      .then((response) => {
        const fetchedSubtotal = response.data.subtotal;
        setSubtotal(fetchedSubtotal);
      })
      .catch((err) => {
        setError('Error fetching subtotal');
        console.error(err);
      });
  }, []);

  // Function to handle removing a cart item
  const handleRemoveCartItem = (itemId) => {
    // Make an API request to remove the item from the cart
    axios.delete(`/api/cart/items/${itemId}`)
      .then(() => {
        // Update the cartItems state to remove the deleted item
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItems.length); // Update cartItemCount
      })
      .catch((err) => {
        setError('Error removing cart item');
        console.error(err);
      });
  };

  return (
    <CartContext.Provider value={{ cartItems, subtotal, error, cartItemCount, handleRemoveCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

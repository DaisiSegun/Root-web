import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartData, setCartData] = useState({
    cartItems: [],
    subtotal: null,
    error: null,
  });

  const addToCart = async (product, quantity) => {
    try {
      const response = await axios.post('/api/cart/add', {
        productID: product._id,
        quantity,
      });

      if (response.status === 201) {
        fetchCartData();
        window.alert('Product added to cart successfully!');
      } else {
        window.alert('Error adding product to cart.');
      }
    } catch (error) {
      setCartData((prevData) => ({
        ...prevData,
        error: 'Error adding product to cart',
      }));
      console.error(error);
    }
  };

  const fetchCartData = () => {
    axios.get('/api/cart/view')
      .then((response) => {
        const fetchedCartItems = response.data;
        setCartData((prevData) => ({
          ...prevData,
          cartItems: fetchedCartItems,
        }));
      })
      .catch((err) => {
        setCartData((prevData) => ({
          ...prevData,
          error: 'Error fetching cart items',
        }));
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handleRemoveCartItem = (itemId) => {
    axios.delete(`/api/cart/remove/${itemId}`)
      .then(() => {
        fetchCartData();
      })
      .catch((err) => {
        setCartData((prevData) => ({
          ...prevData,
          error: 'Error removing cart item',
        }));
        console.error(err);
      });
  };

  return (
    <CartContext.Provider value={{ ...cartData, addToCart, handleRemoveCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };

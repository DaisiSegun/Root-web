import React from 'react';
import './searchresult.css';
import './main.css';
import Header from '../header/Header';
import { useCart } from '../home/CartContext';

function CartItem({ item }) {
  // Make sure to access properties from the correct level in the object hierarchy
  const { name, price, avatar } = item.product;
  const { handleRemoveCartItem } = useCart();
  const handleRemoveClick = () => {
    handleRemoveCartItem(item._id); // Call handleRemoveCartItem with the item's ID
  };
  return (  
    
    <div id={item._id} className='search-col'>
      <div className='search-container'> 
        <img src={avatar} className='search-img'/>
        <div className='search-description'> 
          <p className='search-title'>{name}</p>
          <div className='search-price'>
            <small>₦</small>
            <strong>{price}</strong>
          </div>
          <button onClick={handleRemoveClick} className='cart-button'>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLocation } from 'react-router-dom';
import { useCart } from '../home/CartContext';
import Img1 from '../../assets/img/root-final-logo.png';
import Menu1 from '../../assets/img/menu.svg';
import Cart1 from '../../assets/img/cart.svg';
import Search1 from '../../assets/img/search.svg';
import Profile1 from '../../assets/img/profile.svg';

function Header() {
  const { user } = useAuthContext();
  const location = useLocation();
  const { email } = location.state || {};
  const { cartItems } = useCart();

  // Use the length of selectedProducts to get the cart length
  const cartLength = cartItems.selectedProducts ? cartItems.selectedProducts.length : 0;
  const [searchQuery, setSearchQuery] = React.useState('');
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the query as a query parameter
    window.location.href = `/search?query=${searchQuery}`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="header">
      <div className="section_top">
      <Link className="link" to="/menu">
      <div className="menu-container">
    <img className="menu" src={Menu1} />
    <div className="menu-text">Menu</div>
  </div>
        </Link>
      
        <Link className="link" to="/">
          <img className="logo" src={Img1} />
        </Link>

       

       
      </div>

      <div className="section_middle">
      
        <input
          ref={inputRef}
          className="search"
          type="text"
          placeholder="Search for any Apple Repa"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Add event listener for Enter key
        />
        <div className="search_icon_container">
          <img className="search_icon" src={Search1} onClick={handleSearch} />
        </div>
      </div>
      {!user && (
        <div className="section_bottom">
          <Link to="/signin" className="link">
            <button className="dark_button">Sign In</button>
          </Link>

          {/* <h1 className="hello">Hello </h1> */}

          {email && <p className="helloo">Email: {email}</p>}

       
          {/* <Link to="/signup" className="link">
            <button className="light_button">Register</button>
          </Link> */}
        </div>
      )}

      {user && (
        <div className="section_bottom2">
          <div className="hello-con">
            <h1 className="hello">
              Hello <span style={{ fontWeight: '500' }}>{user.name}</span>
            </h1>
          </div>

          <Link to="/profile" className="link">
            {user && (
              <div class="button-container">
                <img class="hover-button" src={Profile1} />
                <span class="hover-text">Profile</span>
              </div>
            )}
          </Link>
        
        </div>
      )}
        <Link to="/cart" className="link">
      <div className="cart_container">
            <p className="cart_text">Cart</p>
            <img src={Cart1} />
            {cartLength > 0 && <p className="cart_num">{cartLength}</p>}
          </div>
          </Link>
    </div>
    
  );
}

export default Header;

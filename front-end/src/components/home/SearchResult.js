import React from 'react';
import './searchresult.css';

function SearchResult({ avatar, name,  price }) {
  return (
    <div className='search-container'>
      
      
      {/* <img className='search-img' src={avatar} /> */}

      <div className='search-description'>
        <p className='search-title'>{name}</p>
        <div className='search-price'>
          <small>₦</small>
          <strong>{price}</strong>
        </div>
      </div>
    
    </div>
  );
}

export default SearchResult;

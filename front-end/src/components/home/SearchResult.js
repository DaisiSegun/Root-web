import React from 'react'
import './searchresult.css'

function SearchResult({title, image, price}) {
  return (
    <div className='search-container'> 
      <img className='search-img' src={image}/>

    <div className='search-description'> 
    <p className='search-title'> {title}</p>
    <div className='search-price'>
      <small> ₦</small>
      <strong>{price}</strong>
    </div>
    </div>
      
    </div>
  )
}

export default SearchResult
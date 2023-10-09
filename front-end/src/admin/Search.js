import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'
function Search() {
  return (
    <div className='search-container'> 
    <input className='search2' type='text' placeholder='Search'/>
    <div className='search_icon_container'>
    
    <Link className='link' to='/searchresult'>
      <img className='search_icon' src='./images/search.svg'/>
    </Link>
    
    </div>
    
  </div>
  )
}

export default Search
import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import CategoryItem from './CategoryItem'
import { categories } from './data'
function Categories() {
  return (
    <div>
      <div className='nav-container'>
        <h1 className='headers'>Categories</h1>
          
        {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
        
          <nav className='nav'>
           <Link className='link' to='/others'>
          <button className='nav-button'>
            <span className='nav-tit'>My Apple product isn’t listed</span>
            <img className='nav-icon-04' src='./images/nav-blue.svg'/>
          </button>
          </Link>
          </nav>
          
    
       
        </div>
    </div>
  )
}

export default Categories
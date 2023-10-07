import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
function CategoryItem({item}) {


  return (
    <Link className='link' to={`/products/${item.cat}`}>
        <nav className='nav'>
          <button  className='nav-button'>
            <span className='nav-tit'>{item.title}</span>
            <img className='nav-icon-04' src='./images/nav-blue.svg'/>
            
          </button>
        </nav>
      </Link>
  )
}

export default CategoryItem
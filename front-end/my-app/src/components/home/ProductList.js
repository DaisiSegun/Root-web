import React, {useState} from 'react'
import Header from '../header/Header'
import './main.css'
import ScreenCat from './ScreenCat'
import Products from './Products'
import { useLocation } from 'react-router-dom'
import { categories } from './data'
import Screen from './Screen'

function ProductList() {


  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  return (
    <div className='main'>
      <Header/>
      <hr className='line'></hr>
      <h5 className='cat-header'>{cat}</h5>
      <Screen category={cat} />

    </div>
  )
}

export default ProductList
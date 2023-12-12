import React, { useState, useEffect } from 'react';
import './main.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Product from './Product';
import axios from 'axios';
import { shuffle } from 'lodash';
import CustomerTestimonal from './CustomerTestimonal';

function Main({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `/api2/view-all?category=${category}` : '/api2/view-all'
        );
        const shuffledProducts = shuffle(res.data);
        const selectedProducts = shuffledProducts.slice(0, 4);
        setProducts(selectedProducts);
      } catch (err) {
        // Handle the error here
      }
    };

    getProducts();
  }, [category]);

  return (
    <div className='main'>

      <Header />

      <div className='home-row'>
      {/* <hr className='line'></hr> */}
      <Categories />
      <div className='main-row'>
      <div className='headers-02'>Suggested Repairs</div>
        {products.slice(0, 4).map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div className='space'></div>

      </div>
      {/* <CustomerTestimonal/> */}
      <div className='space'></div>
    </div>
  );
}

export default Main;

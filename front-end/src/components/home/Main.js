import React, { useState, useEffect } from 'react';
import './main.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Product from './Product';
import axios from 'axios';
import { shuffle } from 'lodash';

function Main({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `/okay/view-all?category=${category}` : '/okay/view-all'
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
      <hr className='line'></hr>
      <Categories />
      <div className='main-row'>
        {products.slice(0, 4).map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div className='space'></div>
    </div>
  );
}

export default Main;

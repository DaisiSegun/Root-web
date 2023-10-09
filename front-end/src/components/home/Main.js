import React, { useState, useEffect } from 'react';
import './main.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Product from './Product';
import axios from 'axios';
import { shuffle } from 'lodash';
import { useAuthContext } from '../../hooks/useAuthContext';

function Main({ category }) {
  const [products, setProducts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `/api/view-all?category=${category}` : '/api/view-all'
        );
        const shuffledProducts = shuffle(res.data); // Shuffle the products
        const selectedProducts = shuffledProducts.slice(0, 4); // Select the first 4 products from the shuffled array
        setProducts(selectedProducts);
      } catch (err) {}
    };

    getProducts();
  }, [category]);

  return (
    <div className='main'>
      <Header />
      <hr className='line'></hr>
      <Categories />
      {user ? (
        <div className='main-row'>
          {products.slice(0, 4).map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      ) : (
        // Inside your React component
<div className='red-box'>
  <h3>Please Register to view Repairs. Thank you</h3>
</div>

      )}
      <div className='space'></div>
    </div>
  );
}

export default Main;

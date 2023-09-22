import React, { useEffect, useState } from 'react';
import './main.css';
import Product from './Product';
import axios from 'axios';

function Screen({ category }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(category)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('/api/view-all');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, []);

  const matchingProducts = products.filter((item) => item.category === category);

  return (
    <div className='main-row'>
      {matchingProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Screen;

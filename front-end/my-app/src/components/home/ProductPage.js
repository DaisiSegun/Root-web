import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productpage.css';

import Header from '../header/Header';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const addToCart = async (product) => {
    console.log(product)
    try {
    
     if ( product?._id) {
   
        await axios.post('/api/cart/add', {
          productID: product._id,
        quantity: 1,
        });
        // Assuming a successful response means the item was added to the cart.
        alert('Product added to cart successfully!');
      } else {
        alert('Product data is missing productId or quantity.');
      }
    } catch (error) {
      setError('Error adding product to cart');
      console.error(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`/api/view-single/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product data');
        console.error(error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className='main'>
      <Header />
      <hr className='line'></hr>
      {product ? (
        <div>
          <img className='product-img' src={product.avatar} alt={product.name} />
        </div>
      ) : (
        <p className='loading-message'>Loading product image...</p>
      )}
      <div className='product-des-container'>
        {product ? (
          <>
            <h1 className='product-title'>{product.name}</h1>
            <div className='product-price'>
              <small className='product-small'>₦</small>
              <strong className='product-strong'>{product.price}</strong>
            </div>
            <button className='add-to-cart' onClick={()=> addToCart(product)}>
              Add to Cart
            </button>
          </>
        ) : (
          <p className='loading-message'>{error || 'Loading product details...'}</p>
        )}
      </div>
      <div className='space'></div>
    </div>
  );
}

export default ProductPage;

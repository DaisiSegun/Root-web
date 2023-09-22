import React from 'react'
import './main.css'
import { popularProducts } from './data'
import Product from './Product'
import { useEffect, useState } from "react";
import axios from "axios";

function Products({category, filters, }) {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `/api/view-all?category=${category}`
            : "/api/view-all"
        );
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [category]);
 

 
  return ( 
    <div className='main-row'>
       {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div> 
  )
}

export default Products
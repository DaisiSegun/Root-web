import React, { useEffect, useState } from 'react';
import './main.css';
import Product from './Product';
import axios from 'axios';

function Screen({ category }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Change this based on your preference

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('/okay/view-all');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, []);

  const matchingProducts = products.filter((item) => item.category === category);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const productsToDisplay = matchingProducts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < matchingProducts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className='main-row'>
        {productsToDisplay.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>

      <div className='pagination-buttons'>
        <button
          className='previous-button'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className='next-button'
          onClick={handleNextPage}
          disabled={endIndex >= matchingProducts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Screen;

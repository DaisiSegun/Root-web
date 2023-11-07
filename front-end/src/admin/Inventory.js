import React, { useState, useEffect } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import InventoryCard from './InventoryCard';
import EditProductModal from './EditProductModal';

function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [noProductsFound, setNoProductsFound] = useState(false); // State for no products found

  useEffect(() => {
    const apiUrl = '/api2/view-all';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    // Include updatedProduct._id in the request body
    const requestBody = {
      productId: updatedProduct._id,
      avatar: updatedProduct.avatar,
      name: updatedProduct.name,
      price: updatedProduct.price,
      stock: updatedProduct.stock,
      category: updatedProduct.category,
      description: updatedProduct.description,
      
    };
console.log (requestBody.avatar)
console.log (requestBody.name)
    // Send a PUT request to update the product with the updated data
    fetch('/api/update-product', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditingProduct(null);
        setProducts((prevProducts) =>
          prevProducts.map((p) => (p._id === data._id ? data : p))
        );
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
      console.log(updatedProduct)
  };

  const handleSearch = () => {
    fetch(`/api2/search-products?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Set the noProductsFound state based on whether the search results are empty
        setNoProductsFound(data.length === 0);
      })
      .catch((error) => {
        console.error('Error searching for products:', error);
      });
  };

  return (
    <div className="sidebar">
      <Sidebar />
      <div className="upload">
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        <h1 className="header3" style={{ marginBottom: '1rem' }}>
          All Inventory
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : noProductsFound ? ( // Render error message when no products are found
        <p style={{ marginLeft: '1.5rem', marginTop: '1.5rem', fontSize: '1.8rem', color: 'gray', textAlign: 'center', lineHeight: '2rem' }}>
    No products found.
  </p>
        ) : (
          products.map((product, index) => (
            <InventoryCard
              key={index}
              no={index + 1}
              image={product.avatar}
              title={product.name}
              price={product.price}
              onEditClick={() => handleEditProduct(product)}
            />
          ))
        )}
      </div>
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onUpdate={handleUpdateProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
}

export default Inventory;

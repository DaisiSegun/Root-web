import React, { useState } from 'react';

function EditProductModal({ product, onUpdate, onClose }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    onUpdate(editedProduct);
  };

  return (
    <div className='edit-product-modal'>
      <h2>Edit Product</h2>
      <input
        type='text'
        name='name'
        value={editedProduct.name}
        onChange={handleInputChange}
      />
      <input
        type='number'
        name='price'
        value={editedProduct.price}
        onChange={handleInputChange}
      />
      <input
        type='file'
        name='avatar' // Update the name to 'avatar'
        accept='image/*'
        onChange={handleInputChange} // Handle changes in the same function
      />
      <button className='btnedit2' onClick={handleUpdateClick}>Update</button>
      <button className='btnsave' onClick={onClose}>Cancel</button>
    </div>
  );
}

export default EditProductModal;

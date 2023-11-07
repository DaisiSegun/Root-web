import React, { useState } from 'react';

function InventoryCard({ onEditClick, no, image, title, price }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPrice, setEditedPrice] = useState(price);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditClick({ title: editedTitle, price: editedPrice });
  };

  return (
    <div className='inventory-card'>
      <div className='inventory-con'>
        <p>{no}</p>
        <img className='inventory-img' src={image} alt={title} />
        <p>{title}</p>
        <div className='price'>
          <small className='naira-icon'>₦</small>
          <strong className='strong-naira'>{price}</strong>
        </div>
      </div>

      {isEditing ? (
        <div className='isedit'>
          <input
            type='text'
            name='title'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type='number'
            name='price'
            value={editedPrice}
            onChange={(e) => setEditedPrice(parseFloat(e.target.value))}
          />
          <button className='btnsave' onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <button className='btnedit' onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default InventoryCard;

import React, { useState } from 'react';
import './pages.css'
function PriceCalculator() {
  const [inputPrice, setInputPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const price = parseFloat(inputPrice);
    if (!isNaN(price)) {
      const updatedPrice = price + (0.20 * price) + 6000;
      setTotalPrice(updatedPrice);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      calculatePrice();
    }
  };

  return (
    <div  className='price-calculator'>
      <h1 className='upload-text2'>Price Calculator</h1>
      <input
        type="number"
        placeholder="Enter the price"
        value={inputPrice}
        onChange={(e) => setInputPrice(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='price-button' onClick={calculatePrice}>Calculate</button>
      {totalPrice !== 0 && (
        <p>Total Price: {totalPrice.toFixed(2)}</p>
      )}
    </div>
  );
}

export default PriceCalculator;

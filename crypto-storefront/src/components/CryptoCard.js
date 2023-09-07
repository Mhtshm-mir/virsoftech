import React, { useState } from 'react';

function CryptoCard({ name, price, addToCart }) {
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyClick = () => {
    if (quantity > 0) {
      addToCart({ name, quantity, price });
      setQuantity(0);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a quantity.');
    }
  };

  return (
    <div className="crypto-card">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button onClick={handleBuyClick}>Buy</button>
      {quantity > 0 ? (
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      ) : (
        <div>
          <button onClick={() => setQuantity(1)}>Quantity</button>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default CryptoCard;

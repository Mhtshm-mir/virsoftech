import React, { useState } from 'react';
import './App.css';
import CryptoCard from './components/CryptoCard';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <h1>Crypto Storefront</h1>
      <div className="crypto-container">
        <CryptoCard name="Bitcoin" price="$40000" addToCart={addToCart} />
        <CryptoCard name="Ethereum" price="$2800" addToCart={addToCart} />
        <CryptoCard name="Litecoin" price="$150" addToCart={addToCart} />
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;

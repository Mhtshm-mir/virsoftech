import React from 'react';

function Cart({ cartItems }) {
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} x{item.quantity} = ${item.quantity * parseFloat(item.price.replace('$', ''))}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && <p style={{fontSize:"30px",color:'red'}}>Total: ${totalCost.toFixed(2)}</p>}
    </div>
  );
}

export default Cart;

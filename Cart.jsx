import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ items, removeFromCart }) => {
  if (!items) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div className="cart-container container">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {items.map((item, index) => (
              <li key={index} className="list-group-item cart-item">
                {item.name} - ${item.price}
                <button
                  className="btn btn-danger ml-3"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;

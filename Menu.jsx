import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = ({ addToCart }) => {
  const menuItems = [
    { id: 1, name: 'Hamburger', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Salad', price: 8 },
    { id: 4, name: 'Ice-cream', price: 3}
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="menu-container container">
      <h2>Menu</h2>
      <ul className="list-group">
        {menuItems.map((item) => (
          <li key={item.id} className="list-group-item menu-item">
            {item.name} - ${item.price}
            <button
              className="btn btn-primary ml-3"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

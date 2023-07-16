import React, { useState } from 'react';
import Menu from './Menu';
import Cart from './Cart';
import OrderForm from './OrderForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const handleOrderSubmit = (formData) => {
    // Process the order data
    console.log(formData);
    // Save the order as a JSON file
    saveOrderAsJson(formData);
    // Reset the cart
    setCartItems([]);
  };

  const saveOrderAsJson = (orderData) => {
    try {
      const jsonData = JSON.stringify(orderData, null, 2);
      const fileBlob = new Blob([jsonData], { type: 'application/json' });
      const fileUrl = URL.createObjectURL(fileBlob);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'order.json');
      link.click();
    } catch (error) {
      console.error('Error saving order as JSON:', error);
    }
  };

  return (
    <div className="app-container container">
      <h1>Food Ordering System</h1>
      <div className="row">
        <div className="col-lg-6">
          <Menu addToCart={addToCart} />
        </div>
        <div className="col-lg-6">
          <Cart items={cartItems} removeFromCart={removeFromCart} />
          <OrderForm handleOrderSubmit={handleOrderSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;            

import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderForm = ({ handleOrderSubmit }) => {
  const [contact, setContact] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact || !deliveryAddress) {
      alert('Please fill in all the fields');
      return;
    }
    
    const formData = {
      contact,
      deliveryAddress,
    };

  
    handleOrderSubmit(formData);

    setContact('');
    setDeliveryAddress('');
  };

  return (
    <div className="order-form-container container">
      <h2>Order Form</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryAddress">Delivery Address:</label>
          <input
            type="text"
            className="form-control"
            id="deliveryAddress"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;

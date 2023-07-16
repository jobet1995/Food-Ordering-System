import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Food Ordering System title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Food Ordering System/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds item to cart', () => {
    render(<App />);
    const addToCartButton = screen.getByTestId('add-to-cart-button');
    fireEvent.click(addToCartButton);
    const cartItem = screen.getByText(/Item Name/i);
    expect(cartItem).toBeInTheDocument();
  });

  test('removes item from cart', () => {
    render(<App />);
    const addToCartButton = screen.getByTestId('add-to-cart-button');
    fireEvent.click(addToCartButton);
    const removeFromCartButton = screen.getByTestId('remove-from-cart-button');
    fireEvent.click(removeFromCartButton);
    const cartItem = screen.queryByText(/Item Name/i);
    expect(cartItem).not.toBeInTheDocument();
  });

  test('submits order form', () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Jobet Casquejo' } });
    const submitButton = screen.getByText(/Submit Order/i);
    fireEvent.click(submitButton);
    const orderData = {
      name: 'Jobet Casquejo',
    };
    expect(console.log).toHaveBeenCalledWith(orderData);
  });
});
                                               

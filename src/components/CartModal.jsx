import React from 'react';

const CartModal = ({ isVisible, cartItems, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - Quantity: {item.quantity}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
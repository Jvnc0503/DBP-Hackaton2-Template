import React from 'react';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'; // Asumiendo que tienes un SVG para el ícono

const CartIcon = ({ itemCount = 0 }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
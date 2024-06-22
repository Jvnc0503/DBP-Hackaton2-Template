import React from 'react';

// Asumiendo que existe una función addToCart en el contexto de la aplicación
// que maneja la lógica de añadir productos al carrito.

const AddToCartButton = ({ productId, addToCart }) => {
  return (
    <button onClick={() => addToCart(productId)}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
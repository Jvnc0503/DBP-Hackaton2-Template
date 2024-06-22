import React from 'react';
import { fetchEditItem, fetchDeleteItem } from './api'; // Asegúrate de implementar fetchDeleteItem

const ProductItem = ({ id, name, description, price, onProductChange }) => {
  const handleEdit = async () => {
    const newName = prompt('Editar Nombre:', name);
    const newDescription = prompt('Editar descripcion:', description);
    const newPrice = prompt('Editar precio:', price);

    try {
      await fetchEditItem(id, { name: newName, description: newDescription, price: newPrice });
      onProductChange(); // Notifica al componente padre para que actualice la lista de productos
    } catch (error) {
      console.error('Error editando el producto:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetchDeleteItem(id); // Asume que esta función está implementada en api.js
      onProductChange(); // Notifica al componente padre para que actualice la lista de productos
    } catch (error) {
      console.error('Error borrando el producto:', error);
    }
  };

  return (
    <div className="product-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
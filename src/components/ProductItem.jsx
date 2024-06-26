import React, { useState } from 'react';
import { fetchPutItem, fetchDeleteItem } from '../api';

const ProductItem = ({ id, name: initialName, description: initialDescription, price: initialPrice, onProductChange }) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);

  const handleEdit = async () => {
    const newName = prompt('Editar Nombre:', name);
    const newDescription = prompt('Editar descripcion:', description);
    const newPrice = prompt('Editar precio:', price);

    if (newName && newDescription && newPrice) {
      try {
        await fetchPutItem(id, { name: newName, description: newDescription, price: newPrice });
        setName(newName);
        setDescription(newDescription);
        setPrice(newPrice);
        onProductChange();
      } catch (error) {
        console.error('Error editando el producto:', error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await fetchDeleteItem(id);
      onProductChange(); 
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
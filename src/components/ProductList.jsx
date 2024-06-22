import React, { useState, useEffect } from 'react';
import { fetchGetItems } from '../api';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchGetItems();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
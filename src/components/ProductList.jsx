import React, { useState, useEffect } from 'react';
import { fetchGetItems } from '../api';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [lastKey, setLastKey] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchGetItems(50, lastKey);
        setLastKey(res.lastKey)
        setProducts(res.items);
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
            key={product.asin}
            imageUrl={product.imgUrl}
            name={product.title}
            stars={product.stars}
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
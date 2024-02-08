import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="product-list" style={{ background: '#fff' }}>
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={ product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Description: {product.description}</p>
          <p>Price: Rs.{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

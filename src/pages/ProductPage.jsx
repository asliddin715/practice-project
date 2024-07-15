// src/pages/ProductPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.products.find(p => p.id === id));
  console.log(product)
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className='single'>
      <img src={product.image_url} alt={product.name} />
      <h1>{product.name}</h1>
      <span>{product.price}</span>
        <p>{product.description}</p>
      <button className='btn-1'>Add to Cart</button>

    </div>
    </div>
  );
};

export default ProductPage;

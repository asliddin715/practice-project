import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
   
     <div className='content'>
      <div className='back'></div>
        <img src={product.image_url} alt={product.name} />
     <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
        <span>{product.price}</span>
        <p>{product.description}</p>
      <button className='btn' onClick={addToCart}>Add to Cart</button>
     </div>
  
  );
};

export default ProductCard;

// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

// import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
   console.log(products)
  const [nameFilter, setNameFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, [dispatch]);
   
  
  
  const handleFilter = () => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: { name: nameFilter, color: colorFilter } });
  };

  return (
    <div className='container'>
      
     <div>
      <Sidebar product={products}/>
     </div>
      <div className='container-content'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} setFilters={handleFilter} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

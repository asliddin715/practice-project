// src/App.jsx
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const App = () => {

  return(
  <div>
   <Navbar/>
    <Routes>
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  </div>

  )
}


export default App;

// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// import wishlist from './wishlist';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Krist Logo" className="logo" />
      </div>
      <div>
      <ul className="nav-links">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
          <li><NavLink to="/our-story" activeClassName="active">Our Story</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/search" className="icon"><img src="/serch.svg" alt="laoding" /></NavLink>
        <NavLink to="/wishlist" className="icon"><img src="/yurak.svg" alt="loading"/></NavLink>
        <NavLink to="/cart" className="icon"><img src="/shop.svg" alt="laoding" /></NavLink>
        <NavLink to="/login" className="login-button">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

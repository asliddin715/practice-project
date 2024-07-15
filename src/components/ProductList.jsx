import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(product);
   console.log(products,"hello")
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchCategory = !product.brand_name.length || product.brand_name.includes(product.brand_name);
    const matchColor = !product.color_options.length || product.color_options.includes(product.color_options);
    const matchSize = !product.sizes.length || product.sizes.includes(product.size);
    const matchPrice = !product.price || product.price <= product.price;
    return matchCategory && matchColor && matchSize && matchPrice;
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.brand_name}</p>
          <p>Price: ${product.price}</p>
          <p>Color: {product.color}</p>
          <p>Size: {product.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

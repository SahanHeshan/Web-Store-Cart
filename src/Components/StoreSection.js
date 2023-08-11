// store item dispay section
import React from 'react';
import Product from './Product';
import '../CSS/StoreSection.css';

const StoreSection = ({ products, addToCart, initialLoad }) => {
  return (
    <div className="store-container">
      <div className="product-container" id="product-container">
        {products.map((product) => {
          const id = 'product-' + product.id;
          return <Product key={id} id={id} product={product} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default StoreSection;

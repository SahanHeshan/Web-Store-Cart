//individual products inside the store
import React from 'react';
import '../CSS/Product.css';

const Product = ({ id, product, addToCart }) => (
  <div id={id}>
    <div className="product-card">
      <div class="image-card">
        <img src={product.thumbnail} alt="" className="product-image" />
      </div>
      <div className="product-details ">
        <div>
          <h5 className="product-title">{product.title}</h5>
        </div>

        <div className="flex"> 
          <div className="product-data">{product.rating}★</div>
          <div className="product-data">{product.category}</div> 
          <div className="product-data">{product.brand}</div> 
        </div>  
          <button
            onClick={() => addToCart({ id, name: product.title, price: product.price })}
            className="add-to-cart-button">
            <h2>Add Item</h2>
          </button>
          <div className="product-price price">${product.price}.00</div>
        
      </div>
    </div>
  </div>
);

export default Product;

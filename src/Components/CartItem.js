//individual items inside the cart
import React from 'react';
import '../CSS/CartItem.css';
const CartItem = ({ item, quantity, removeFromCart }) => (
  <div className="cart-item-card">
      <div className="">
        <h5 className="name">
          {item.name}
        </h5> 
        <p>Item Price: ${item.price} </p>
        <p>Amount: {quantity} </p>
        <p>Total: ${quantity * item.price}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="remove"
        >
          Remove
        </button>
      </div>
  </div>
);

export default CartItem;

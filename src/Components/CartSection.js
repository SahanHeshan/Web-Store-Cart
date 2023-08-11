//cart item section
import React from 'react';
import CartItem from './CartItem';
import '../CSS/CartSection.css';

const CartSection = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.item.price, 0);
  };

  return (
    <div className="flex items-center">
      <div className="t">
        <div className="">
          <h1 className="">
            My Cart <i className="fa-cart-shopping"></i>
          </h1>
        </div>
        
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((cartItem) => (
              <CartItem
                key={cartItem.item.id}
                item={cartItem.item}
                quantity={cartItem.quantity}
                removeFromCart={() => removeFromCart(cartItem.item.id)}
              />
            ))}
            <div className="subtotal">Subtotal: ${calculateTotal().toFixed(2)}</div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartSection;

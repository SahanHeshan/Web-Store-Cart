//side menu containing the cart
import React from 'react';
import CartItem from './CartItem';
import '../CSS/SideMenu.css'; 

const SideMenu = ({ cart, removeFromCart, isSideMenuOpen, toggleSideMenu }) => {

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.item.price, 0);
  };

  return (
    <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
      <div className="side-menu-content">
        <div>
          <button className="close-btn" onClick={toggleSideMenu}>
            Close
          </button>
          <h1 className="flex">
            My Cart 
          </h1>
        </div>
        <div className="subtotal">Final Amount <div className='subtotal-value'> $ {calculateTotal().toFixed(2)}</div></div>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.item.id}
            item={cartItem.item}
            quantity={cartItem.quantity}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className='void'></div>
      </div>
    </div>
  );
};

export default SideMenu;

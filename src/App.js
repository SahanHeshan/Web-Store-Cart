import React, { useState, useEffect } from 'react';
import StoreSection from './Components/StoreSection';
import SideMenu from './Components/SideMenu';
import SearchBox from './Components/SearchBox';
import SortProducts from './Components/SortProducts';
import CartIco from './icon.png';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }

    setCartItemCount(cartItemCount + 1);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.item.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    const updatedItemCount = cartItemCount - 1;

    const filteredCart = updatedCart.filter((cartItem) => cartItem.quantity > 0);

    setCart(filteredCart);
    setCartItemCount(updatedItemCount);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Set the search term state
  };

  const handleSort = (sortOption) => {
    setSortOption(sortOption); // Set the sort option state
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')           // Fetch the products data from API
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setFilteredAndSortedProducts(json.products); 
        setInitialLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  useEffect(() => {                                 // Filter and sort the products 
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sorted = [...filtered];

    switch (sortOption) {
      case 'priceLowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'topRated':
        sorted = sorted.filter((product) => product.rating > 4);
        break;
      case 'category':
        sorted.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'brand':
        sorted.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      default:
        // No sorting  for 'default'
        break;
    }

    setFilteredAndSortedProducts(sorted); // Update the filtered and sorted products state
  }, [searchTerm, sortOption, products]); 

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div>
      <div className='sticky'>
        <SearchBox onSearch={handleSearch} />
        <button className="cart-toggle-btn" onClick={toggleSideMenu}>
        <img src={CartIco} alt='CART' className='cart'/>
           {cartItemCount}
        </button>
      </div>
      <SortProducts onSort={handleSort} />
      <StoreSection products={filteredAndSortedProducts} addToCart={addToCart} initialLoad={initialLoad} />
      <SideMenu cart={cart} removeFromCart={removeFromCart} isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
    </div>
  );
};

export default App;

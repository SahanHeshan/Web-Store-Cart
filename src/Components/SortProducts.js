//sorting options
import React, { useState } from 'react';
import '../CSS/Search-Sort.css';

const SortProducts = ({ onSort }) => {
  const [selectedSort, setSelectedSort] = useState('');

  const handleSortClick = (sortOption) => {
    setSelectedSort(sortOption); 
    onSort(sortOption);
  };

  return (
    <div className="sort-products">
      <div className="button-container">
        <button
          className={`sort-button ${selectedSort === 'priceLowToHigh' ? 'active' : ''}`}
          onClick={() => handleSortClick('priceLowToHigh')}>
          Price: Lowest
        </button>
        <button
          className={`sort-button ${selectedSort === 'priceHighToLow' ? 'active' : ''}`}
          onClick={() => handleSortClick('priceHighToLow')}>
          Price: Highest
        </button>
        <button
          className={`sort-button ${selectedSort === 'topRated' ? 'active' : ''}`}
          onClick={() => handleSortClick('topRated')}>
          Above 4 Stars
        </button>
        <button
          className={`sort-button ${selectedSort === 'category' ? 'active' : ''}`}
          onClick={() => handleSortClick('category')}>
          Category
        </button>
        <button
          className={`sort-button ${selectedSort === 'brand' ? 'active' : ''}`}
          onClick={() => handleSortClick('brand')}>
          Brand
        </button>
        <button
          className={`sort-button ${selectedSort === 'default' ? 'active' : ''}`}
          onClick={() => handleSortClick('default')}>
          No Filters
        </button>
      </div>
    </div>
  );
};

export default SortProducts;

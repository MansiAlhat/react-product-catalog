import React from 'react';

const SortByPrice = ({ onSort }) => {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort-price">Sort by Price:</label>
      <select id="sort-price" onChange={handleSortChange} defaultValue="">
        <option value="" disabled>Select</option>
        <option value="none">None</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortByPrice;

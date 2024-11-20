import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
  const handleCategoryChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="category-filter">
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

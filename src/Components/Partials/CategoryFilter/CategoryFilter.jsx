import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <h2 className="filter-title">Filter By Category</h2>
      <ul className="category-list">
        {categories.map(category => (
          <li
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;

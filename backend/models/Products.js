import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products-and-EcommercePage.css';

const Products = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Pharmaceuticals', background: '/pharmaceuticals.png' },
    { name: 'Nutraceuticals', background: '/nutraceuticals.png' },
    { name: 'Cosmetic', background: '/cosmetic.png' },
    { name: 'Herbal', background: '/herbal.png' },
    { name: 'Health and Hygiene', background: '/health.png' },
    { name: 'Food and Supplement', background: '/supplement.png' }
  ];

  const handleClick = (category) => {
    if (typeof setSelectedCategory === 'function') {
      setSelectedCategory(category);
    }
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '');
    navigate(`/products/${formattedCategory}`);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="product-card"
            style={{ backgroundImage: `url(${category.background})` }}
            onClick={() => handleClick(category.name)}
          >
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

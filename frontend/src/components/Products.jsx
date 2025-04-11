import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products-and-EcommercePage.css';

const Products = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Pharmaceuticals', background: '/pharmaceuticals.png' },
    { name: 'Nutraceuticals', background: '/nutraceuticals.png' },
    { name: 'Cosmetic (Comming Soon)', background: '/cosmetic.png' },
    { name: 'Herbal (Comming Soon)', background: '/herbal.png' },
    { name: 'Health and Hygiene', background: '/health.png' },
  ];

  const handleClick = (category) => {
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    if (typeof setSelectedCategory === 'function') {
      setSelectedCategory(category);
    }

    navigate(`/products/${formattedCategory}`);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="product-card" 
            style={{ backgroundImage: `url(${category.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h3>{category.name}</h3>
            <button onClick={() => handleClick(category.name)}>View {category.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
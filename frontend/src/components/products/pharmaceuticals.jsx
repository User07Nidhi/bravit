import React from 'react';
import { Link } from 'react-router-dom';
import './Pharmaceuticals.css';

const Pharmaceuticals = () => {
  return (
    <div className="pharmaceuticals-container">
      <h1>Pharmaceuticals</h1>
      <p>Explore our range of high-quality pharmaceutical products designed for various healthcare needs.</p>
      <div className="pharmaceuticals-content">
        <img src="/image5.jpg" alt="Pharmaceuticals" className="product-image" />
        <p>We offer a variety of medicines, supplements, and health-related products.</p>
      </div>
      <Link to="/products">
        <button className="back-button">Back to Products</button>
      </Link>
    </div>
  );
};

export default Pharmaceuticals;

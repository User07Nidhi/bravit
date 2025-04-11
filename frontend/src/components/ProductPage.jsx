import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css';

const productDetails = {
  ketobasu: { name: 'Keto Basu', description: 'Keto Basu is a premium medicine for digestion problems.', price: '₹130', image: '/images/ketobasu.jpg' },
  bravizoledsr: { name: 'Bravizole DSR', description: 'Bravizole DSR helps treat acidity and gas trouble effectively.', price: '₹120', image: '/images/dsr.jpg' },
  bravizolerdsr: { name: 'Bravizole - R DSR', description: 'Bravizole R DSR Ultra provides fast relief from acidity.', price: '₹110', image: '/images/dsr-r.jpg' },
  bravitjr: { name: 'Bravit Jr', description: 'Bravit Jr supports growth and development in children.', price: '₹85', image: '/images/bravitjr.jpg' },
  bravitl: { name: 'Bravit-L', description: 'Bravit-L is a liver support supplement with essential nutrients.', price: '₹145', image: '/images/bravitl.jpg' },
  bravitm: { name: 'Bravit-M', description: 'Bravit-M enhances metabolism and supports overall wellness.', price: '₹180', image: '/images/bravitm.jpg' },
  riprotin: { name: 'Riprotin', description: 'Riprotin is a general protein supplement for daily nutrition.', price: '₹299', image: '/images/riprotein.jpg' },
  riprotinmusclepro: { name: 'Riprotin MusclePro', description: 'Riprotin MusclePro is designed for muscle growth and strength.', price: '₹4500', image: '/images/riprotinmusclepro.jpg' },
  bravycare6: { name: 'BravyCare-6', description: 'BravyCare-6 hydrates and nourishes the skin, leaving it radiant.', price: '₹75', image: '/images/Bravycare-6.jpg' },
  herbalmango: { name: 'Herbal Mango Juice', description: 'A refreshing herbal drink made with the richness of mango.', price: '₹299 for 200g', image: '/images/Mango.png' },
  bravycarehygiene: { name: 'BravyCare Hygiene Kit', description: 'A complete kit for daily health and hygiene needs.', price: '₹500', image: '/images/Bravycarekit.jpg' },
  facecream: { name: 'Face Cream', description: 'Hydrating face cream for radiant skin.', price: '₹300', image: '/images/facecream.jpg' },
  hairserum: { name: 'Hair Serum', description: 'Hair serum for smooth and shiny hair.', price: '₹450', image: '/images/hairserum.jpg' },
  lipbalm: { name: 'Lip Balm', description: 'Moisturizing lip balm for soft lips.', price: '₹150', image: '/images/lipbalm.jpg' },
  aloeveragel: { name: 'Aloe Vera Gel', description: 'Soothing aloe vera gel for skin and hair.', price: '₹200', image: '/images/aloeveragel.jpg' },
  neemcapsules: { name: 'Neem Capsules', description: 'Neem capsules for skin and immune health.', price: '₹500', image: '/images/neemcapsules.jpg' },
  tulsidrops: { name: 'Tulsi Drops', description: 'Tulsi drops for better immunity and digestion.', price: '₹180', image: '/images/tulsidrops.jpg' },
  handsanitizer: { name: 'Hand Sanitizer', description: 'Instant hand sanitizer for germ protection.', price: '₹120', image: '/images/handsanitizer.jpg' },
  toothpaste: { name: 'Toothpaste', description: 'Herbal toothpaste for strong teeth and gums.', price: '₹90', image: '/images/toothpaste.jpg' },
  shampoo: { name: 'Shampoo', description: 'Nourishing shampoo for healthy hair.', price: '₹250', image: '/images/shampoo.jpg' },
  proteinbar: { name: 'Protein Bar', description: 'Nutritious protein bar for instant energy.', price: '₹120', image: '/images/proteinbar.jpg' },
  multivitamintablets: { name: 'Multivitamin Tablets', description: 'Essential vitamins and minerals for daily health.', price: '₹350', image: '/images/multivitamintablets.jpg' },
  energydrink: { name: 'Energy Drink', description: 'Boosts stamina and keeps you energized.', price: '₹100', image: '/images/energydrink.jpg' }
};

const ProductPage = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const product = productDetails[productName?.toLowerCase()];

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <h3>Price: {product.price}</h3>
      <button
        onClick={() => navigate(`/checkout/${product.name}`)}
        style={{
          padding: '10px 20px',
          backgroundColor:'rgb(229, 120, 120)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px' 
        }}
      >
        Buy Now
      </button>
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductPage;

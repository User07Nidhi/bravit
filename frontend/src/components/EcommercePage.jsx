import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './EcommercePage.css';

const productDetails = {
  'ketobasu': { name: 'Keto Basu', price: '₹130', id: 'ketobasu', image: '/images/ketobasu.jpg' },
  'bravizoledsr': { name: 'Bravizole DSR', price: '₹120', id: 'bravizoledsr', image: '/images/dsr.png' },
  'bravizolerdsr': { name: 'Bravizole - R DSR', price: '₹110', id: 'bravizolerdsr', image: '/images/dsr-r.png' },
  'bravitjr': { name: 'Bravit Jr', price: '₹85', id: 'bravitjr', image: '/images/bravitjr.jpg' },
  'bravitl': { name: 'Bravit-L', price: '₹145', id: 'bravitl', image: '/images/bravitl.png' },
  'bravitm': { name: 'Bravit-M', price: '₹180', id: 'bravitm', image: '/images/bravitm.jpg' },
  'riprotin': { name: 'Riprotin', price: '₹299', id: 'riprotin', image: '/images/riprotein.jpg' },
  'riprotinmusclepro': { name: 'Riprotin MusclePro', price: '₹4500', id: 'riprotinmusclepro', image: '/images/riprotinmusclepro.jpg' },
  'bravycare6': { name: 'BravyCare-6', price: '₹75', id: 'bravycare6', image: '/images/Bravycare-6.png' },
  'herbalmango': { name: 'Herbal Mango Juice', price: '₹299 for 200g', id: 'herbalmango', image: '/images/Mango.png' },
  'bravycarehygiene': { name: 'BravyCare Hygiene Kit', price: '₹500', id: 'bravycarehygiene', image: '/images/Bravycare-6.png' },
  'facecream': { name: 'Face Cream', price: '₹300', id: 'facecream', image: '/images/facecream.jpg' },
  'hairserum': { name: 'Hair Serum', price: '₹450', id: 'hairserum', image: '/images/hairserum.jpg' },
  'lipbalm': { name: 'Lip Balm', price: '₹150', id: 'lipbalm', image: '/images/lipbalm.jpg' },
  'aloeveragel': { name: 'Aloe Vera Gel', price: '₹200', id: 'aloeveragel', image: '/images/aloeveragel.jpg' },
  'neemcapsules': { name: 'Neem Capsules', price: '₹500', id: 'neemcapsules', image: '/images/neemcapsules.jpg' },
  'tulsidrops': { name: 'Tulsi Drops', price: '₹180', id: 'tulsidrops', image: '/images/tulsidrops.jpg' },
  'handsanitizer': { name: 'Hand Sanitizer', price: '₹120', id: 'handsanitizer', image: '/images/handsanitizer.jpg' },
  'toothpaste': { name: 'Toothpaste', price: '₹90', id: 'toothpaste', image: '/images/toothpaste.jpg' },
  'shampoo': { name: 'Shampoo', price: '₹250', id: 'shampoo', image: '/images/shampoo.jpg' },
};

const categories = {
  pharmaceuticals: ['ketobasu', 'bravizoledsr', 'bravizolerdsr'],
  nutraceuticals: ['bravitjr', 'bravitl', 'bravitm', 'riprotin', 'riprotinmusclepro'],
  cosmetic: ['facecream', 'hairserum', 'lipbalm'],
  herbal: ['aloeveragel', 'neemcapsules', 'tulsidrops'],
  healthandhygiene: ['bravycarehygiene', 'bravycare6'],
};

const EcommercePage = ({ selectedCategory }) => {
  const { category } = useParams();
  const categoryName = selectedCategory || category || '';
  const formattedKey = categoryName.toLowerCase().replace(/\s/g, '');

  const productKeys = categories[formattedKey];

  const getUserEmail = () => localStorage.getItem('userEmail');

  const addToCart = async (productId) => {
    const email = getUserEmail();
    if (!email) return alert('Please log in first.');

    const product = productDetails[productId];
    const quantity = 1;

    try {
      const response = await axios.post('http://localhost:5000/api/auth/add', {
        productId: product.id,
        quantity,
        name: product.name,
        price: product.price,
        email,
      });
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add product to cart.');
    }
  };

  if (!productKeys) return <h2>No products found for this category.</h2>;

  return (
    <div className="ecommerce-container">
      <h1>{categoryName} Products</h1>
      <div className="ecommerce-products">
        {productKeys.map((key) => {
          const product = productDetails[key];
          return (
            <div key={key} className="ecommerce-product-card">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${key}`}>
                <button>View</button>
              </Link>
              <button onClick={() => addToCart(key)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EcommercePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ userEmail }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cart/${encodeURIComponent(userEmail)}`);
        setCartItems(response.data); // ✅ fixed
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (userEmail) {
      fetchCart();
    }
  }, [userEmail]);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - Qty: {item.quantity} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

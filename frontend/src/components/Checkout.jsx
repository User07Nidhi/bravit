import React, { useEffect } from 'react';

const Checkout = () => {
  useEffect(() => {
    alert("Redirecting to payment...\nPlease click the below link to make the payment.");
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Complete Your Payment</h2>
      <p>Please scan the QR code below or click the payment link:</p>
      
      <img
        src="/ss.png" // Replace with your actual path in public folder
        alt="Payment QR Code"
        style={{ width: '250px', height: '250px', margin: '20px 0' }}
      />

      <p>
        OR click the link to pay: <br />
        <a
          href="https://qrco.de/bftavW" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', fontWeight: 'bold' }}
        >
          Make Payment Now
        </a>
      </p>
    </div>
  );
};

export default Checkout;

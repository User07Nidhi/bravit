import React from 'react';

const ShippingPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
      <h2 style={{ color: "#2c3e50" }}>Shipping Policy</h2>
      <p>
        We ensure ease of selling and the best possible customer experience and mandate delivery to all customers via our logistics partners and deduct the shipping cost from the selling price before making a payment to you.
      </p>
      <p>
        Shipping fee is calculated on actual weight or volumetric weight, whichever is higher. This is to account for items which are lightweight but occupy a lot of shipping space.
      </p>

      <h3 style={{ color: "#34495e" }}>Volumetric Weight Calculation</h3>
      <p><strong>Volumetric Weight (kg) = (L * B * H) / 5000</strong> (where L, B, H are in cm)</p>

      <h3 style={{ color: "#34495e" }}>Shipping Rates (Exclusive of Taxes)</h3>
      <table border="1" cellpadding="8" cellspacing="0" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Weight Slab</th>
            <th>Local (₹)</th>
            <th>Regional (₹)</th>
            <th>National (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0-0.5 kg</td>
            <td>50</td>
            <td>65</td>
            <td>85</td>
          </tr>
          <tr>
            <td>0.5-3 kg</td>
            <td>38</td>
            <td>43</td>
            <td>57</td>
          </tr>
          <tr>
            <td>3-12 kg</td>
            <td>18</td>
            <td>20</td>
            <td>25</td>
          </tr>
          <tr>
            <td> 12 kg</td>
            <td>14</td>
            <td>16</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ color: "#34495e" }}>Shipping Zones</h3>
      <ul>
        <li><strong>Local:</strong> Item shipped within a city.</li>
        <li><strong>Regional:</strong> Item shipped within a state.</li>
        <li><strong>National:</strong> Item shipped within the country.</li>
      </ul>

      <h3 style={{ color: "#34495e" }}>Taxes</h3>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Tax Type</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GST</td>
            <td>18%</td>
          </tr>
          <tr>
            <td>Service Tax</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Customs Duty (if applicable)</td>
            <td>Varies</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShippingPolicy;

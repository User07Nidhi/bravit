import React from 'react';

const RefundPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
      <h2 style={{ color: "#2c3e50" }}>Refund / Return Policy</h2>
      <p>
        Goods return is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement
        and/or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same return
        policy. For all products, the return/replacement policy provided on the product page shall prevail over the general return policy.
      </p>

      <h3 style={{ color: "#34495e" }}>
        The return policy is divided into two parts; do read all sections carefully to understand the conditions and cases under which returns will
        be accepted.
      </h3>
      <ul>
        <li><strong>Supplements:</strong> 5 days</li>
        <li><strong>Health & Hygiene Products:</strong> 7 days</li>
      </ul>

      <h3 style={{ color: "#34495e" }}>General Rules for a Successful Return:</h3>
      <ul>
        <li>In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.</li>
        <li>
          During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund
          (on-the-spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except
          for manufacturing defects.
        </li>
        <li>
          In case of online order and payment, we will be requiring a video of opening the box as a supportive document to make a successful return.
        </li>
        <li>Any written complaint will be entertained within 3 days of the product delivery for successful return of the product.</li>
        <li>
          In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of
          delivery confirmation for the seller to investigate.
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicy;

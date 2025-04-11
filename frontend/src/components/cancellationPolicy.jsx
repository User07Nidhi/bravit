import React from "react";

const CancellationPolicy = () => {
    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "800px",
                margin: "auto",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                color: "#333",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h1 style={{ textAlign: "center" }}>
                Cancellation Policy
            </h1>
            <p>
                If the buyer places an order and cancels it before Bravit marks it ready
                for delivery, and in cases where the full amount has already been paid
                by the buyer, the full amount is refunded to the buyer, including the
                automatically reversed tax.
            </p>
            <p>
                In such a scenario, neither do we receive any amount nor do we bear any
                cost. The same principle applies when the order is in Return to Origin.
                Such cancellations affect the business of Bravit.
            </p>
            <p>
                If the cancellation of the product is made after marking RFD, the
                commission fees, as well as allied taxes, are charged. In addition, the
                canceled product is delisted for a week.
            </p>
            <p>
                If the buyer cancels the order after marking RFD, the commission fees,
                as well as allied taxes, are charged. In addition, the canceled product
                is delisted for a week.
            </p>
        </div>
    );
};

export default CancellationPolicy;

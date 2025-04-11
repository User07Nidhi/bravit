// routes/paymentRoutes.js
const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();

router.post('/create-order', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: 'YOUR_RAZORPAY_KEY_ID',
            key_secret: 'YOUR_RAZORPAY_SECRET',
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

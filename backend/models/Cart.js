// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  cart: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;

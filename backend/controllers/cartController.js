const Cart = require("../models/Cart");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { email, item } = req.body;

    let cart = await Cart.findOne({ email });
    if (!cart) {
      cart = new Cart({ email, items: [item] });
    } else {
      cart.items.push(item);
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (err) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

// GET CART ITEMS
const getCartItems = async (req, res) => {
  try {
      const userId = req.user.id; // assuming you use auth middleware
      const cartItems = await Cart.find({ userId }); // fetch user's cart
      res.status(200).json(cartItems);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// VIEW CART (optional, similar to getCartItems)
const viewCart = async (req, res) => {
  try {
    const userId = req.body.userId;
    const cart = await Cart.findOne({ userId });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve cart" });
  }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  try {
    const { email, productId } = req.body;
    const cart = await Cart.findOne({ email });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();
    res.status(200).json({ message: "Item removed", updatedCart: cart });
  } catch (error) {
    res.status(500).json({ error: "Error removing item" });
  }
};

// Export all
module.exports = {
  addToCart,
  getCartItems,
  viewCart,
  removeFromCart
};

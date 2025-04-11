import express from 'express';
import User from '../models/User.js'; // ✅ Make sure this exists

const router = express.Router();

router.get("/cart/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.cart || []);
  } catch (error) {
    console.error("Error fetching user cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

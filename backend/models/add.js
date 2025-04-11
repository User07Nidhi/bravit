const mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, default: 1 }
});

const Add = mongoose.model("Add", addSchema);
module.exports = Add;

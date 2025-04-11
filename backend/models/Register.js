const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: "Register" }); // Ensure collection name is "Register"

module.exports = mongoose.model("Register", RegisterSchema);

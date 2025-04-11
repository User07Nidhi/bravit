const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const connectDB = require("./config/db"); 
const paymentRoutes = require('./routes/paymentRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');


mongoose.connect('mongodb://localhost:27017/bravit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

// Main Routes
app.use("/api/auth", auth);
app.use('/api/payment', paymentRoutes);
app.use("/api", cartRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });

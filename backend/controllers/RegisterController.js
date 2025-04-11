const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("../models/Register"); 
require("dotenv").config();

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        let user = await Register.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newUser = new Register({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({ 
            message: "User Registered Successfully", 
            user: { id: newUser._id, name: newUser.name, email: newUser.email },
            token 
        });
    } catch (error) {
        console.error("Error registering user:", error);
        let errorMessage = "Server Error";
        
        if (error.name === "ValidationError") {
            errorMessage = "Invalid user data";
        } else if (error.code === 11000) {
            errorMessage = "Duplicate field value entered";
        } else if (error.name === "JsonWebTokenError") {
            errorMessage = "Error generating authentication token";
        } else if (error.name === "MongoError") {
            errorMessage = "Database error";
        }

        res.status(500).json({ message: errorMessage, error: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if user exists
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ 
            message: "Login Successful", 
            user: { id: user._id, name: user.name, email: user.email },
            token 
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


module.exports = { registerUser, loginUser };

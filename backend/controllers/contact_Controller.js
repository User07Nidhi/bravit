const Contact = require("../models/Contact");

const contact = async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        if (!name || !phone || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = new Contact({ name, phone, email, message });
        await newContact.save();

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving contact form:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = { contact };

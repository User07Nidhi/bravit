const Careers = require("../models/Careers");
const multer = require("multer");

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("resume");

exports.careers = async (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            console.error("Multer error:", err);
            return res.status(400).json({ error: "File upload failed" });
        }

        const { name, email, position, message } = req.body;

        if (!name || !email || !position || !message || !req.file) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            const newApplication = new Careers({
                name,
                email,
                position,
                uploadResume: req.file.originalname,
                resume: {
                    data: req.file.buffer,
                    contentType: req.file.mimetype,
                },
                message,
            });

            await newApplication.save();
            res.status(201).json({ message: "Application submitted successfully" });
        } catch (error) {
            console.error("Error saving application:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
};

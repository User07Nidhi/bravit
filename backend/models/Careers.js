const mongoose = require('mongoose');

const CareersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    uploadResume: {
        type: String,  // Stores file name
        required: true
    },
    whyJoinUs: {   // Updated for better clarity
        type: String,
        required: true
    },
    resume: {
        data: Buffer,           
        contentType: String    
    }
});

module.exports = mongoose.model('Careers', CareersSchema);const express = require('express');

const multer = require('multer');
const Careers = require('../models/Careers');
const router = express.Router();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for form submission
router.post('/apply', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, position, whyJoinUs } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'Resume file is required' });
        }

        const newApplication = new Careers({
            name,
            email,
            position,
            whyJoinUs,
            uploadResume: req.file.originalname,
            resume: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

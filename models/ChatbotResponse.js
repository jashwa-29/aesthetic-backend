const mongoose = require('mongoose');

const ChatbotResponseSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true,
        unique: true, // e.g., 'Breast Implant', 'Rhinoplasty'
    },
    description: {
        type: String,
        required: true
    },
    pageLink: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Breast', 'Body', 'Face', 'Hair', 'Medspa', 'Cosmetic Gynecology', 'FAQ', 'Doctor'],
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ChatbotResponse', ChatbotResponseSchema);

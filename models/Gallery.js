const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: true },  // Image filename
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gallery', gallerySchema);

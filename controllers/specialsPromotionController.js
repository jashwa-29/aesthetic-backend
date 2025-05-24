const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const SpecialsPromotion = require('../models/SpecialsPromotion');

// Create a new specials promotion item
exports.createSpecialsPromotion = async (req, res) => {
  try {
    const { month } = req.body;
    const image = req.file?.filename;

    if (!month || !image) {
      return res.status(400).json({ error: 'Month and image are required for the promotion' });
    }

    const promotion = new SpecialsPromotion({
      month,
      image
    });

    await promotion.save();
    res.status(201).json(promotion);
  } catch (err) {
    console.error('Create error:', err);
    res.status(500).json({ error: 'Failed to create specials promotion item' });
  }
};

// Get all specials promotion items
exports.getAllSpecialsPromotion = async (req, res) => {
  try {
    const promotions = await SpecialsPromotion.find();
    res.json(promotions);
  } catch (err) {
    console.error('Fetch all error:', err);
    res.status(500).json({ error: 'Failed to fetch specials promotion items' });
  }
};

// Get a specific specials promotion item by ID
exports.getSpecialsPromotionById = async (req, res) => {
  try {
    const promotion = await SpecialsPromotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ error: 'Specials promotion item not found' });
    }
    res.json(promotion);
  } catch (err) {
    console.error('Fetch by ID error:', err);
    res.status(500).json({ error: 'Failed to fetch specials promotion item' });
  }
};

// Update a specials promotion item by ID
exports.updateSpecialsPromotion = async (req, res) => {
  try {
    const { month } = req.body;
    const image = req.file?.filename;

    const promotion = await SpecialsPromotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ error: 'Specials promotion item not found' });
    }

    // Delete old image if a new one is uploaded
    if (image && promotion.image) {
      const oldImagePath = path.resolve(__dirname, '../uploads', promotion.image);
      try {
        await fsPromises.unlink(oldImagePath);
        console.log('Old image deleted:', oldImagePath);
      } catch (err) {
        console.error('Error deleting old image:', err.message);
      }
    }

    // Update fields
    promotion.month = month || promotion.month;
    if (image) promotion.image = image;

    await promotion.save();
    res.json(promotion);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Failed to update specials promotion item' });
  }
};

// Delete a specials promotion item by ID
exports.deleteSpecialsPromotion = async (req, res) => {
  try {
    const promotion = await SpecialsPromotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ error: 'Specials promotion item not found' });
    }

    // Delete image file if exists
    if (promotion.image) {
      const imagePath = path.resolve(__dirname, '../uploads', promotion.image);
      try {
        await fsPromises.unlink(imagePath);
        console.log('Image file deleted:', imagePath);
      } catch (err) {
        console.error('Error deleting image file:', err.message);
      }
    }

    await SpecialsPromotion.deleteOne({ _id: req.params.id });
    res.json({ message: 'Specials promotion item deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Failed to delete specials promotion item' });
  }
};

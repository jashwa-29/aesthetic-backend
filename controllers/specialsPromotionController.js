const cloudinary = require('../config/cloudinary');
const SpecialsPromotion = require('../models/SpecialsPromotion');

// Create a new specials promotion item
exports.createSpecialsPromotion = async (req, res) => {
  try {
    const { month } = req.body;
    const file = req.file;

    if (!month || !file) {
      return res.status(400).json({ error: 'Month and image are required for the promotion' });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: 'specials_promotions' },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Image upload failed' });
        }

        const promotion = new SpecialsPromotion({
          month,
          image: result.secure_url,
        });

        await promotion.save();
        res.status(201).json(promotion);
      }
    );

    // Write file buffer to the upload stream
    const stream = require('stream');
    const bufferStream = new stream.PassThrough();
    bufferStream.end(file.buffer);
    bufferStream.pipe(result);
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
    const file = req.file;

    const promotion = await SpecialsPromotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ error: 'Specials promotion item not found' });
    }

    if (file) {
      // Upload new image to Cloudinary
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'specials_promotions' },
        async (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return res.status(500).json({ error: 'Image upload failed' });
          }

          // Update fields
          promotion.image = result.secure_url;
          if (month) promotion.month = month;

          await promotion.save();
          res.json(promotion);
        }
      );

      const stream = require('stream');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(file.buffer);
      bufferStream.pipe(uploadStream);
    } else {
      // No new image, only update month
      if (month) promotion.month = month;
      await promotion.save();
      res.json(promotion);
    }
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

    // Note: Optionally, delete from Cloudinary if storing the public_id
    await SpecialsPromotion.deleteOne({ _id: req.params.id });
    res.json({ message: 'Specials promotion item deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Failed to delete specials promotion item' });
  }
};

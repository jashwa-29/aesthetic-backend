const Gallery = require('../models/Gallery');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

// Helper to upload image buffer to Cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'gallery' }, // You can change the folder name
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); // Return image URL
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// Create a new gallery item
exports.createGallery = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    let imageUrl = '';

    if (!category || !req.file) {
      return res.status(400).json({ error: 'Category and image are required' });
    }

    // Upload image to Cloudinary and get the image URL
    imageUrl = await uploadToCloudinary(req.file.buffer);

    const galleryItem = new Gallery({
      title: title || '',
      description: description || '',
      image: imageUrl,
      category
    });

    await galleryItem.save();
    res.status(201).json(galleryItem);
  } catch (err) {
    console.error('Create error:', err);
    res.status(500).json({ error: 'Failed to create gallery item' });
  }
};

// Get all gallery items
exports.getAllGallery = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.json(galleryItems);
  } catch (err) {
    console.error('Fetch all error:', err);
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
};

// Get a specific gallery item by ID
exports.getGalleryById = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (err) {
    console.error('Fetch by ID error:', err);
    res.status(500).json({ error: 'Failed to fetch gallery item' });
  }
};

// Update a gallery item by ID
exports.updateGallery = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    let imageUrl = req.file ? await uploadToCloudinary(req.file.buffer) : undefined;

    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    // Update fields
    galleryItem.title = title || galleryItem.title;
    galleryItem.description = description || galleryItem.description;
    galleryItem.category = category || galleryItem.category;
    if (imageUrl) galleryItem.image = imageUrl;

    await galleryItem.save();
    res.json(galleryItem);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Failed to update gallery item' });
  }
};

// Delete a gallery item by ID
exports.deleteGallery = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    // Delete image from Cloudinary if exists
    if (galleryItem.image) {
      const publicId = galleryItem.image.split('/').pop().split('.')[0]; // Extract public ID from URL
      await cloudinary.uploader.destroy(publicId);
    }

    await Gallery.deleteOne({ _id: req.params.id });
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Failed to delete gallery item' });
  }
};

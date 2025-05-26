const express = require('express');
const router = express.Router();
const multer = require('multer');
const specialsPromotionController = require('../controllers/specialsPromotionController');
const authMiddleware = require('../middleware/auth');

// Use memoryStorage to support Cloudinary streaming
const storage = multer.memoryStorage();

// Optional file filter (only image MIME types)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isImage = allowedTypes.test(file.mimetype.toLowerCase());
  if (isImage) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// Routes for specials promotions
router.post('/', authMiddleware, upload.single('image'), specialsPromotionController.createSpecialsPromotion);
router.get('/', specialsPromotionController.getAllSpecialsPromotion);
router.get('/:id', specialsPromotionController.getSpecialsPromotionById);
router.put('/:id', authMiddleware, upload.single('image'), specialsPromotionController.updateSpecialsPromotion);
router.delete('/:id', authMiddleware, specialsPromotionController.deleteSpecialsPromotion);

module.exports = router;

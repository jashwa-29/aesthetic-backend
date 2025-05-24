const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const specialsPromotionController = require('../controllers/specialsPromotionController');
const authMiddleware = require('../middleware/auth');

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const filename = Date.now() + fileExtension;
    cb(null, filename);
  }
});

const upload = multer({ storage });

// Routes for specials promotions
router.post('/',authMiddleware, upload.single('image'), specialsPromotionController.createSpecialsPromotion);
router.get('/', specialsPromotionController.getAllSpecialsPromotion);
router.get('/:id', specialsPromotionController.getSpecialsPromotionById);
router.put('/:id', upload.single('image'), specialsPromotionController.updateSpecialsPromotion);
router.delete('/:id',authMiddleware, specialsPromotionController.deleteSpecialsPromotion);

module.exports = router;

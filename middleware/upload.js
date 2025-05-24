// middleware/upload.js
const multer = require('multer');

const storage = multer.memoryStorage(); // Store file in memory as buffer

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isImage = allowedTypes.test(file.mimetype.toLowerCase());
  if (isImage) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

module.exports = multer({ storage, fileFilter });

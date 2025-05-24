const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const specialsPromotionRoutes = require('./routes/specialsPromotionRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
 // Request logging for development  
 
// DB connection  
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('DB connected');
}).catch(err => {
  console.error('DB connection error:', err);
});  
  
// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/specialsPromotions', specialsPromotionRoutes);

// Static file serving for uploads
app.use('/uploads', express.static('uploads'));  

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
}); 
 
// Global error handler for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong! Please try again later.' });
});
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
       
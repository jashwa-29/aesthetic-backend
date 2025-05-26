const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const specialsPromotionRoutes = require('./routes/specialsPromotionRoutes');

const app = express();

// Middleware
app.use(express.json());

// --- CORS Configuration ---
const allowedOrigins = [
  'https://aestheticstudio.in',
  'http://localhost:3000',
  'https://admin.aestheticstudio.in',
  

];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ DB connected');
  })
  .catch(err => {
    console.error('❌ DB connection error:', err);
  });


  app.get('/', (req, res) => {
  res.send('<h2>🚀 API is running successfully!</h2>');
});

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/specialsPromotions', specialsPromotionRoutes);

// --- Static File Handling ---
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- 404 Not Found Handler ---
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong! Please try again later.' });
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 hello Server running on port ${PORT}`);
});

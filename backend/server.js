require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB().catch((err) => {
  console.error('Failed to connect to DB on startup:', err.message || err);
  process.exit(1);
});

// middleware
app.use(cors({
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',').map((origin) => origin.trim()) : '*',
}));
app.use(express.json({ limit: '1mb' }));

// routes
app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Backend is healthy' });
});

// Serve static frontend files if they exist (for monorepo deployment)
const publicPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(publicPath));

// SPA fallback: send index.html for all non-API routes
app.get('*', (req, res) => {
  // Only serve index.html for non-API routes
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(publicPath, 'index.html'), (err) => {
      if (err) {
        res.status(404).send('Backend is running - Frontend not found');
      }
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// ─── CORS ────────────────────────────────────────────────────────────────────
// In production, restrict to the frontend origin(s) set via ALLOWED_ORIGIN env var.
// In development, allow all origins for convenience.
const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(',').map((o) => o.trim())
  : [];

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? (origin, callback) => {
            // Allow requests with no origin (e.g. curl, Postman, server-to-server)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) return callback(null, true);
            callback(new Error(`CORS: origin ${origin} not allowed`));
          }
        : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ─── Body Parser ─────────────────────────────────────────────────────────────
app.use(express.json());

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running ✅', status: 'ok' });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// ─── Global Error Handler ────────────────────────────────────────────────────
// Must have 4 args so Express recognises it as an error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    // Don't leak stack traces in production
    error:
      process.env.NODE_ENV === 'production'
        ? 'Internal Server Error'
        : err.message,
  });
});

// ─── Server Start ─────────────────────────────────────────────────────────────
// Also listen locally (works for Render, Railway, etc.)
// Vercel ignores this and uses the module.exports below instead.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV}]`);
});

// Required for Vercel serverless deployment
module.exports = app;

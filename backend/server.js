require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// ─────────────────────────────────────────────────────────────
// Connect MongoDB
// ─────────────────────────────────────────────────────────────
connectDB();

// ─────────────────────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────────────────────

// Parse JSON requests
app.use(express.json());

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(',').map((origin) => origin.trim())
  : [];

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? function (origin, callback) {
            // Allow Postman / server-side requests
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
              return callback(null, true);
            }

            return callback(
              new Error(`CORS Error: ${origin} is not allowed`)
            );
          }
        : '*',

    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// ─────────────────────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────────────────────

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'TaskFlow Backend Running 🚀',
  });
});

// Task Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// ─────────────────────────────────────────────────────────────
// 404 Handler
// ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// ─────────────────────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === 'production'
        ? 'Internal Server Error'
        : err.message,
  });
});

// ─────────────────────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`
  );
});

// Export for serverless platforms if needed
module.exports = app;
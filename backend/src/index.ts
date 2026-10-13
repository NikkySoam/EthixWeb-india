import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import healthRouter from './routes/health';
import enquiriesRouter from './routes/enquiries';
import adminRouter from './routes/admin';
import { errorHandler } from './middleware/errorHandler';

// Load backend configuration in both src (dev) and dist (production) layouts.
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
// Parse cookies
app.use(cookieParser());
const PORT = process.env.PORT ?? 5000;
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
  'http://127.0.0.1:4173',
];

const configuredOrigin = process.env.CORS_ORIGIN?.split(',').map((origin) => origin.trim()).filter(Boolean);
const allowedOriginList = [...new Set([...(configuredOrigin ?? []), ...allowedOrigins])];

// ── Middleware ────────────────────────────────────────────────────────────────

// Parse incoming JSON request bodies, limit size to 1 MB
app.use(express.json({ limit: '1mb' }));

// Enable CORS — allow the configured frontend origins and Vite dev ports.
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOriginList.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ── Routes ────────────────────────────────────────────────────────────────────

app.use('/api', healthRouter);
app.use('/api/enquiries', enquiriesRouter);
app.use('/api/admin', adminRouter);

// Global error handler (must be after routes)
app.use(errorHandler);

// ── Start server ──────────────────────────────────────────────────────────────

// Connect to MongoDB before listening
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[server] Running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[server] Failed to start due to DB error:', err);
    process.exit(1);
  });

import rateLimit from 'express-rate-limit';

// Simple in‑memory rate limiter – 10 requests per IP per minute
export const enquiryRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: 'Too many enquiries from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

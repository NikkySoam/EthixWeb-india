import { Router } from 'express';
import { honeypotCheck } from '../middleware/honeypot';
import { enquiryRateLimiter } from '../middleware/rateLimiter';
import { validateEnquiry, createEnquiry } from '../controllers/enquiryController';

const router = Router();

router.post(
  '/',
  honeypotCheck,
  enquiryRateLimiter,
  validateEnquiry,
  createEnquiry,
);

export default router;

import { Request, Response, NextFunction } from 'express';

// Honeypot field name – should match the hidden input in frontend form
const HONEYPOT_FIELD = 'phone';

export const honeypotCheck = (req: Request, res: Response, next: NextFunction) => {
  const value = (req.body as any)[HONEYPOT_FIELD];
  if (value && value.trim() !== '') {
    // Detected bot submission – silently reject
    return res.status(400).json({ error: 'Invalid submission.' });
  }
  next();
};

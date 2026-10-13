import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  admin?: { username: string };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'Authentication is not configured' });
  }

  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const payload = jwt.verify(token, secret) as { username?: unknown };
    if (typeof payload.username !== 'string' || !payload.username) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    req.admin = { username: payload.username };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

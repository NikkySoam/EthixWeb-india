import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body ?? {};
    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const adminUsername = getEnv('ADMIN_USERNAME').trim();
    const adminPasswordHash = getEnv('ADMIN_PASSWORD_HASH');

    if (username.trim().toLowerCase() !== adminUsername.toLowerCase()) {
      console.warn('[admin] Login rejected: username did not match ADMIN_USERNAME');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, adminPasswordHash);
    if (!passwordMatch) {
      console.warn('[admin] Login rejected: password did not match ADMIN_PASSWORD_HASH');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: adminUsername }, getEnv('JWT_SECRET'), { expiresIn: '2h' });
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie('token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'none' : 'strict',
      maxAge: 2 * 60 * 60 * 1000,
    });

    return res.json({ message: 'Logged in' });
  } catch (error) {
    console.error('[admin] Login configuration or token error:', error);
    return res.status(500).json({ error: 'Admin login is temporarily unavailable' });
  }
};

export const logoutAdmin = (_req: Request, res: Response) => {
  const isProd = process.env.NODE_ENV === 'production';
  res.clearCookie('token', {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'strict',
  });
  return res.json({ message: 'Logged out' });
};
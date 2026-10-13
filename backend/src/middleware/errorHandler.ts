import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[error]', err);
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  // Do not leak stack trace or internal details in production
  res.status(status).json({ error: message });
};

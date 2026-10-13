import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  // simple health check; log request path for debugging
  console.log('[health] request path:', req.path);
  res.status(200).json({ status: 'ok' });
});

export default router;

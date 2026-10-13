import express from 'express';
import { AuthRequest, authMiddleware } from '../middleware/authMiddleware';
import Enquiry from '../models/Enquiry';
import { loginAdmin, logoutAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);

// All routes below require the login cookie.
router.use(authMiddleware);

// Get current admin info
router.get('/me', (req: AuthRequest, res) => {
  if (!req.admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return res.json({ username: req.admin.username });
});

// Enquiry (Lead) management routes
router.get('/leads', async (_, res) => {
  const leads = await Enquiry.find().sort({ createdAt: -1 });
  return res.json(leads);
});

router.patch('/leads/:id', async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const lead = await Enquiry.findByIdAndUpdate(id, update, { new: true });
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    return res.json(lead);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid request' });
  }
});

router.delete('/leads/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await Enquiry.findByIdAndDelete(id);
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    return res.json({ message: 'Lead deleted' });
  } catch (err) {
    return res.status(400).json({ error: 'Invalid request' });
  }
});

export default router;

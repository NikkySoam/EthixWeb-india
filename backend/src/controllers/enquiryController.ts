import { Request, Response, NextFunction } from 'express';
import { validationResult, body } from 'express-validator';
import Enquiry from '../models/Enquiry';

// Validation chain for POST /api/enquiries
export const validateEnquiry = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('company')
    .optional({ nullable: true })
    .trim()
    .isLength({ max: 150 })
    .withMessage('Company name too long'),
  body('service')
    .trim()
    .isIn(['Web Development', 'Performance Marketing', 'Brand Strategy'])
    .withMessage('Invalid service selection'),
  body('message')
    .trim()
    .isLength({ min: 5, max: 2000 })
    .withMessage('Message must be between 5 and 2000 characters'),
];

export const createEnquiry = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, company, service, message } = req.body;
  try {
    const enquiry = new Enquiry({ name, email, company, service, message });
    const saved = await enquiry.save();
    res.status(201).json({ id: saved._id, message: 'Enquiry received' });
  } catch (err) {
    next(err);
  }
};

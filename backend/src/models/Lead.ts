import mongoose, { Document, Schema } from 'mongoose';

export interface LeadDocument extends Document {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<LeadDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    service: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<LeadDocument>('Lead', LeadSchema);

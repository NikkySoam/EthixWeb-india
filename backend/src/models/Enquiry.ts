import mongoose from 'mongoose';

const { Schema } = mongoose;

const EnquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    company: {
      type: String,
      maxlength: 150,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      enum: ['Web Development', 'Performance Marketing', 'Brand Strategy'],
    },
    message: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2000,
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Enquiry', EnquirySchema);

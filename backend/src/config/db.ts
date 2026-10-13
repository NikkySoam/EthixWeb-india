import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!uri) {
    console.error('[db] MONGODB_URI is not defined');
    throw new Error('Database configuration missing');
  }
  try {
    await mongoose.connect(uri);
    console.log('[db] Connected to MongoDB');
  } catch (err) {
    console.error('[db] Connection error:', err);
    throw err;
  }
};

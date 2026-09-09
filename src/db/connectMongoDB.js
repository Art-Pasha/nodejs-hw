import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  await mongoose.connect(MONGO_URL);

  console.log('✅ MongoDB connection established successfully');
};

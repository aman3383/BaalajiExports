// This file is the ONLY place where the MongoDB URI should be set. It must come from the .env file.
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// During build time, if no MONGODB_URI is provided, return null
if (!MONGODB_URI) {
  console.warn('MONGODB_URI not found in environment variables. Please check your .env file.');
  console.warn('Database connection will be disabled during build time.');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If no MONGODB_URI, return null for build time
  if (!MONGODB_URI) {
    console.warn('No MONGODB_URI provided - database connection disabled');
    return null;
  }

  if (cached.conn) {
    console.log('Using cached database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Creating new database connection...');
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
    console.log('Database connected successfully');
  } catch (error) {
    cached.promise = null;
    console.error('Database connection failed:', error);
    // Return null for build time
    return null;
  }

  return cached.conn;
}

export default dbConnect;

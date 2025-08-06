import { channel } from "diagnostics_channel";
import mongoose from "mongoose";

// Este bloque extiende globalThis para incluir mongoose
declare global {
  var mongoose: {
    conn: any;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

// Esto evita que TypeScript lo convierta en un módulo global
export {};


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) return cached.conn;

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_URI, {
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
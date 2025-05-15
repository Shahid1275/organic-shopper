import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { v2 as cloudinary } from 'cloudinary';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Load environment variables
dotenv.config();

const Port = process.env.PORT || 5000;
connectDB();

// Cloudinary configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY // Match .env key
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use("/api/user", userRouter);
app.use("/api/review", reviewRouter);
app.use("/api/product", productRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Uncaught error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message
  });
});

app.get("/", (req, res) => {
    res.send("Backend is working Good!");
});

app.listen(Port, () => {
    console.log(`Server running on port ${Port}!`);
});
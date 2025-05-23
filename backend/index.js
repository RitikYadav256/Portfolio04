import express from "express";
import cors from "cors";
import multer from "multer";
import connectDb from "./model/Db.js";
import ImageModel from './model/Schema.js';
import dotenv from 'dotenv';
import route from "./routes/Posts.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use memory storage for multer to handle the image file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Root route

// Image upload route
app.use("/Portfolio",route);


const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port ${PORT}`);
});

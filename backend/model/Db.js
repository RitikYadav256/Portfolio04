import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const url = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    console.log("Connecting......");
    await mongoose.connect(url);
    console.log("Connected to Database");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDb;

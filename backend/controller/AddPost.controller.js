import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import ImageModel from '../model/Schema.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const AddPost = async (req, res) => {
  try {
    const file = req.file;
    const  comments  = req.body.comments;

    if (!file) {
      return res.status(400).send("No file uploaded");
    }
    const newImage = new ImageModel({
      description:req.body.description,
      name: file.originalname,
      img: {
        data: file.buffer,
        contentType: file.mimetype
      },
      comments: [comments] || [""]
    });

    await newImage.save();
    res.status(200).send("✅ Image uploaded and saved to MongoDB");
  } catch (err) {
    console.error("❌ Error uploading image:", err);
    res.status(500).send("Server error while uploading image");
  }
};

export default AddPost;
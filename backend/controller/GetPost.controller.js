import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import ImageModel from '../model/Schema.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const GetPost = async (req, res) => {
  try {
    // Fetch all images and comments from the database
    const posts = await ImageModel.find();

    if (!posts || posts.length === 0) {
      return res.status(404).send("No posts found");
    }

    // Return all posts (images and comments)
    res.status(200).json(posts);
  } catch (err) {
    console.error("❌ Error fetching posts:", err);
    res.status(500).send("Server error while fetching posts");
  }
};

export default GetPost;
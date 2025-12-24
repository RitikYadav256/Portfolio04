import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./model/Db.js";
import route from "./routes/Posts.route.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/portfolio", route);

// Serve frontend build
app.use(express.static(path.join(__dirname, "dist")));

// React Router refresh fix (EXPRESS v4 SAFE)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`✅ Server running on port ${PORT}`);
});

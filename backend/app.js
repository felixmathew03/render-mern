import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from './router.js';
import path from 'path';
import env from 'dotenv';

const app = express();
env.config();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


app.use('/api/todos',routes)
const __dirname = path.resolve();

// Serve frontend
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*splat", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  );

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

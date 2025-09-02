import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

import postRoutes from "./routes/posts.js";

dotenv.config(); // ✅ loads .env

const app = express();
const PORT = process.env.PORT || 5000; // ✅ use your PORT from .env
const CONNECTION_URL = process.env.CONNECTION_URL; // ✅ pull the URI properly

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// API Routes
app.use("/posts", postRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Vercel!");
});

// MongoDB connection (only once)
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.log(`${error} did not connect`));

// ⚡ Export wrapped handler for Vercel
export const handler = serverless(app);

// If running locally, listen on PORT
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

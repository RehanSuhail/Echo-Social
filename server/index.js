import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ✅ API Routes with prefix
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// ✅ Test route
app.get("/api", (req, res) => {
  res.send("✅ Backend is running!");
});

// MongoDB connection
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

/**
 * 🚀 Start server:
 * - Render sets process.env.PORT → must use it.
 * - Vercel: we *don't* call listen, we just export app.
 */
if (process.env.RENDER) {
  // Render deployment
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
} else if (process.env.NODE_ENV !== "production") {
  // Local development
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Local server on port ${PORT}`));
}

// For Vercel
export default app;

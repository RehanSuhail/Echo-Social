import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// API Routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Vercel!");
});

// Connect to DB once (Vercel handles scaling)
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.log(`${error} did not connect`));

// ✅ Export app (no app.listen here!)
export default app;

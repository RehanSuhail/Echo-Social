import express from "express";

const router = express.Router();

// ✅ Placeholder route for now
router.get("/", (req, res) => {
  res.send("✅ User routes working!");
});

export default router;

import axios from "axios";

// Switch API base URL depending on environment
const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://echo-back-five.vercel.app" // ✅ Live backend on Vercel
      : "http://localhost:5000",            // ✅ Local backend
});

// API functions
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

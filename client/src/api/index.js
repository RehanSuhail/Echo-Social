import axios from "axios";

// Switch API base URL depending on environment
const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://echo-backend-seven.vercel.app"
      : "http://localhost:5000",      
});

// API functions
export const fetchPosts = () => API.get("/api/posts"); // note the /api prefix
export const createPost = (newPost) => API.post("/api/posts", newPost);
export const likePost = (id) => API.patch(`/api/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/api/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);

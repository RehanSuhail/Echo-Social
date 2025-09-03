import axios from "axios";

// Switch API base URL depending on environment
const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://echo-backend-seven.vercel.app"
      : "http://localhost:5000",
});

// Debug log
console.log("🌍 API base URL:", API.defaults.baseURL);

// API functions
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export default API;

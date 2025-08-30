import axios from 'axios';

// Use Render API in production, localhost in development
const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://echo-social-whc7.onrender.com'  // your deployed backend
    : 'http://localhost:5000'                  // local backend
});

// API functions
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

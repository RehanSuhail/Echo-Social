import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import * as api from "../api/index.js";

// Helper to log full error info
const logError = (error, context) => {
  if (error.response) {
    console.error(`❌ ${context} – Server responded with status ${error.response.status}:`, error.response.data);
  } else if (error.request) {
    console.error(`❌ ${context} – No response received:`, error.request);
  } else {
    console.error(`❌ ${context} – Error setting up request:`, error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    logError(error, "getPosts");
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    logError(error, "createPost");
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    logError(error, "updatePost");
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    logError(error, "likePost");
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    logError(error, "deletePost");
  }
};

// This file contains all functions that make calls to the APi at specific endpoints for specific tasks.
// Uses "axios" to fetch from the backend.

import axios from "axios";

// URL of the API, server.
const url = "http://localhost:5000/api/recipes";

export const fetchAllRecipes = () => axios.get(url);
export const addRecipe = (newRecipe) => axios.post(url, newRecipe);
export const fetchUniqueRecipe = (id) => axios.get(`${url}/${id}`);
export const updateRecipe = (id, updatedRecipe) =>
  axios.patch(`${url}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);

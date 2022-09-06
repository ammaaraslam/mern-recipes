import axios from "axios";

const url = "http://localhost:5000/api/recipes";

export const fetchAllRecipes = () => axios.get(url);
export const addRecipe = (newRecipe) => axios.post(url, newRecipe);
export const fetchUniqueRecipe = (id) => axios.get(`${url}/${id}`);
export const updateRecipe = (id, updatedRecipe) =>
  axios.patch(`${url}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);

// This file contains all the actions(functions) that need to be executed for specific tasks.

import * as api from "../api";

// Action for getting all recipes from the API.
export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllRecipes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action for adding a new recipe to the API.
export const addRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.addRecipe(recipe);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action for getting a unique recipe from the API.
export const getUniqueRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUniqueRecipe(id);
    dispatch({ type: "UNIQUE_RECIPE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action for updating a recipe from the API with a unqiue "id"
export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action for  deleting a recipe from the API with a unqiue "id"
export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

import * as api from "../api";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllRecipes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.addRecipe(recipe);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

import * as api from "../api";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllRecipes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
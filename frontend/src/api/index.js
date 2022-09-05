import axios from "axios";

const url = "http://localhost:5000/api/recipes";

export const fetchAllRecipes = () => axios.get(url);

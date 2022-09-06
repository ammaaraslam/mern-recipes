const reducer = (recipes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...recipes, action.payload];
    case "UPDATE":
      return recipes;
    case "DELETE":
      return recipes.filter((recipe) => recipe.id !== action.payload);
    default:
      return recipes;
  }
};
export default reducer;

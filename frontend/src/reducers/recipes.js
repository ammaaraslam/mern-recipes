// This is the reducer function used to handle states using redux and is used by all the functions that make the API request.

const reducer = (recipes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...recipes, action.payload];
    case "UNIQUE_RECIPE":
      return action.payload;
    case "UPDATE":
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    case "DELETE":
      return recipes.filter((recipe) => recipe._id !== action.payload);
    default:
      return recipes;
  }
};
export default reducer;

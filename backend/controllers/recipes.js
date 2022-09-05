import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = (req, res) => {
  res.send("Post Recipe");
};

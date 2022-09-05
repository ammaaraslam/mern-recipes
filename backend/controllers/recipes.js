import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const body = req.body;
  const newRecipe = new Recipe(body);

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUniqueRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const uniqueRecipe = await RTCIceCandidate.findById(id);

    res.status(200).json(uniqueRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  await Recipe.findByIdAndRemove(id);

  res.json({ message: "Successfully deleted" });
};

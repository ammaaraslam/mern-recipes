import Recipe from "../models/recipe.js";
import mongoose from "mongoose";

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
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const uniqueRecipe = await Recipe.findById(id);

    res.status(200).json(uniqueRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedRecipe = await Recipe.findByIdAndUpdate(id, body, { new: true });

  res.status(200).json(updatedRecipe);
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Recipe.findByIdAndRemove(id);

  res.json({ message: "Successfully deleted" });
};

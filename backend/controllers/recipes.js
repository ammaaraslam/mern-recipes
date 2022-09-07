// This file contains all controllers(handlers/functions) used for each route/request.

import Recipe from "../models/recipe.js";
import mongoose from "mongoose";

// Controller for getting all recipes.
export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    // Return data if status 200
    res.status(200).json(allRecipes);
  } catch (error) {
    // If an error occurs, return error message with a status of 404.
    res.status(404).json({ message: error.message });
  }
};

// Controller for creating a recipe.
export const createRecipe = async (req, res) => {
  const body = req.body;
  const newRecipe = new Recipe(body);

  try {
    await newRecipe.save();
    // Accept input and add recipe to db and return a success status of 201
    res.status(201).json(newRecipe);
  } catch (error) {
    // If an error occurs, return error message with a status of 404.
    res.status(404).json({ message: error.message });
  }
};

// Controller for getting a unique recipe based on the "id" passed in.
export const getUniqueRecipe = async (req, res) => {
  const { id } = req.params;

  // Logic to check if the id passed in is a valid one.
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const uniqueRecipe = await Recipe.findById(id);

    // Return a unique recipe if success with a status of 200.
    res.status(200).json(uniqueRecipe);
  } catch (error) {
    // If an error occurs, return error message with a status of 404.
    res.status(404).json({ message: error.message });
  }
};

// Controller for updating a recipe.
export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  // Logic to check if the id passed in is a valid one.
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // Accept the new values of the recipe if it matches the passed in "id" and return a success status.
  const updatedRecipe = await Recipe.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json(updatedRecipe);
};

// Controller for deleting a recipe.
export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  // Logic to check if the id passed in is a valid one.
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // Remove recipe that matches the passed in "id" and return a success message
  await Recipe.findByIdAndRemove(id);
  res.json({ message: "Successfully deleted" });
};

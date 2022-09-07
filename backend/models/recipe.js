// This file contains the Schema for the MongoDB cluster. Each recipe has a name, description and list of ingredients.

import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
});

const Recipe = mongoose.model("Recipes", recipeSchema);

export default Recipe;

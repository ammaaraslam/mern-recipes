import mongoose, { mongo } from "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
});

const Recipes = mongoose.model("Recipes", recipeSchema);

export default Recipes;

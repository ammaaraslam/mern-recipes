import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
});

const Recipe = mongoose.model("Recipes", recipeSchema);

export default Recipe;

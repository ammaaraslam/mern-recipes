// This file contains routes for specific actions(controllers).
// Note:- All controllers(functions) that are executed for each route is stored in a separate folder named "recipe.js" under the "controllers" folder.

import express from "express";
import {
  getAllRecipes,
  createRecipe,
  getUniqueRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.js";

// Initializing the router
const router = express.Router();

// Routes
router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.get("/:id", getUniqueRecipe);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;

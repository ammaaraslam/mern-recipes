import express from "express";

import {
  getAllRecipes,
  createRecipe,
  getUniqueRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.get("/:id", getUniqueRecipe);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;

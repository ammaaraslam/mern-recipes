import express from "express";

import {
  getAllRecipes,
  createRecipe,
  getUniqueRecipe,
  deleteRecipe,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.post("/:id", getUniqueRecipe);
router.delete("/:id", deleteRecipe);

export default router;

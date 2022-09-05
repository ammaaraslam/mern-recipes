import express from "express";

import {
  getAllRecipes,
  createRecipe,
  getUniqueRecipe,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.post("/:id", getUniqueRecipe);

export default router;

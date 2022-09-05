import express from "express";

import { getAllRecipes, createRecipe } from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/:id", createRecipe);

export default router;

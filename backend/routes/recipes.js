import express from "express";

import { getAllRecipes } from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);

export default router;

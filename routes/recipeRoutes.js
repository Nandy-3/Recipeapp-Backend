import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/create-recipe", createRecipe);
router.get("/get-recipe", getAllRecipes);
router.get("/get-recipe/:id", getRecipeById);
router.put("/update-recipe/:id", updateRecipe);
router.delete("/delete-recipe/:id", deleteRecipe);

export default router;
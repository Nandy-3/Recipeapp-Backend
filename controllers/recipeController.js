import Recipe from "../models/recipe.js";

// CREATE RECIPE
export const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, cookingTime } = req.body;

    // Validation
    if (!title || !ingredients || !instructions || !cookingTime) {
      return res.status(400).json({
        message: "All fields (title, ingredients, instructions, cookingTime) are required"
      });
    }

    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      cookingTime
    });

    const savedRecipe = await recipe.save();

    res.status(201).json({
      message: "Recipe created successfully",
      data: savedRecipe
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL RECIPES
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({
      message: "Recipes fetched successfully",
      count: recipes.length,
      data: recipes
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET RECIPE BY ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    // Not found check
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe fetched successfully",
      data: recipe
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE RECIPE
export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Not found check
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe updated successfully",
      data: updatedRecipe
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE RECIPE
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    // Not found check
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe deleted successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
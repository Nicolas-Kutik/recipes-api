import Recipe from '../models/Recipe.js';

// Create Recipe
const createRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        if (!name || !ingredients || !instructions) {
            return res.status(400).json({ error: 'Name, ingredients, and instructions are required' });
        }
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Single Recipe
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id, req.params.body, req.query);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Recipe
const updateRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        if (!name || !ingredients || !instructions) {
            return res.status(400).json({ error: 'Name, ingredients, and instructions are required' });
        }
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) return res.status(404).json({ error: 'Recipe not found' });
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Recipe
const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id, req.params.body);
        if (!deletedRecipe) return res.status(404).json({ error: 'Recipe not found' });
        res.status(200).json(deletedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Export all functions as default
export default {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};

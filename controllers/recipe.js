const Recipe = require('../models/Recipe');

// Create Recipe
exports.createRecipe = async (req, res) =>{
    try{
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Single Recipe
exports.getRecipesById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id, req.params, req.body);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Recipe
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id, req.params);
        if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(deletedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
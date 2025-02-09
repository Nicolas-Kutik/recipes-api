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
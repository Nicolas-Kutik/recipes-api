const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

router.post('/api/recipe', recipeController.createRecipe);
router.get('/api/recipe/:id', recipeController.getRecipesById);
router.get('/api/recipes', recipeController.getAllRecipes);
router.put('/api/recipe/:id', recipeController.updateRecipe);
router.delete('/api/recipe/:id', recipeController.deleteRecipe);

module.exports = router;
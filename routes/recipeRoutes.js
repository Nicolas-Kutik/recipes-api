import express from 'express';
import recipeController from '../controllers/recipe.js';

const router = express.Router();

router.post('/api/recipe', recipeController.createRecipe);
router.get('/api/recipe/:id', recipeController.getRecipeById);
router.get('/api/recipes', recipeController.getAllRecipes);
router.put('/api/recipe/:id', recipeController.updateRecipe);
router.delete('/api/recipe/:id', recipeController.deleteRecipe);

export default router;
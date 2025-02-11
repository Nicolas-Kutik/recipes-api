import express from 'express';
import recipeController from '../controllers/recipe.js';

const router = express.Router();

router.post('/api/v1/recipe', recipeController.createRecipe);
router.get('/api/v1/recipe/:id', recipeController.getRecipeById);
router.get('/api/v1/recipes', recipeController.getAllRecipes);
router.put('/api/v1/recipe/:id', recipeController.updateRecipe);
router.delete('/api/v1/recipe/:id', recipeController.deleteRecipe);

export default router;
import Recipe from '../models/Recipe.js';

/**
 * @swagger
 * /api/v1/recipes:
 *   post:
 *     summary: Create a new recipe
 *     description: Add a new recipe with name, ingredients, and instructions.
 *     responses:
 *       201:
 *         description: The new recipe was created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/recipes:
 *   get:
 *     summary: Get all recipes
 *     description: Retrieve a list of all recipes.
 *     responses:
 *       200:
 *         description: A list of recipes
 *       500:
 *         description: Server error
 */
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   get:
 *     summary: Get a single recipe by ID
 *     description: Retrieve a specific recipe using its ID.
 *     responses:
 *       200:
 *         description: The requested recipe
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Server error
 */
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   put:
 *     summary: Update a recipe by ID
 *     description: Update an existing recipe.
 *     responses:
 *       200:
 *         description: The recipe was updated successfully
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   delete:
 *     summary: Delete a recipe by ID
 *     description: Remove a recipe from the database.
 *     responses:
 *       200:
 *         description: The recipe was deleted successfully
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Server error
 */
const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ error: 'Recipe not found' });
        res.status(200).json(deletedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};


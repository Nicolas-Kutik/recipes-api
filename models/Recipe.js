const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
   title: { type: 'string', required: true},
   ingredient: { type: 'string', required: true},
   instructions: { type: 'string', required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
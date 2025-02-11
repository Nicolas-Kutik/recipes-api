import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
   title: { type: 'string', required: true},
   ingredient: { type: 'string', required: true},
   instructions: { type: 'string', required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Recipe', RecipeSchema);
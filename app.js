import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import recipeRouting from './routes/recipeRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

// Controllers
import recipeController from './controllers/recipe.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware Setup
app.use(bodyParser.json());

// Swagger config
const docOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Recipes API',
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
};

const openapiSpecification = swaggerJSDoc(docOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(`Connection Failure: ${err}`));

// URL dispatching
app.use('/api/v1/recipes', recipeRouting);

// Start web server
app.listen(port, () => {
    console.log(`Express API running on port ${port}`);
});
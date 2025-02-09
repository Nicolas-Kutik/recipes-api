const express = require('express');
const mongoose = require('mongoose');
const swagger = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const recipeRouting = require('./routes/recipeRoutes')
require('dotenv').config;

const app = express();
const port = process.env.PORT || 3000;

// Middleware Setup
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/recipes', recipeRouting);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => console.log(`Server running on port ${port}`));
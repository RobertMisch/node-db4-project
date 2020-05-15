const express = require('express');

const RecipesRouter = require('./recipes/recipe-router');
const IngredientsRouter = require('./ingredients/ingredient-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;
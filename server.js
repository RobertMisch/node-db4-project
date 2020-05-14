const express = require('express');

const RecipesRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;
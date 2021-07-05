const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });

    // `getRecipes()`: should return a list of all recipes in the database.
    // - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
    // - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe    

});

router.get('/:id/shop', (req, res) => {
    const {id}=req.params
    Recipes.getShoppingList(id)
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
})
router.get('/:id/steps', (req, res) => {
    const {id}=req.params
    Recipes.getInstructions(id)
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
})

module.exports = router;
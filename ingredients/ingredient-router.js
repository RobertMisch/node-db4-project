const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Ingredients.find()
        .then(ingredients => {
            res.json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' });
        });
});


module.exports = router;
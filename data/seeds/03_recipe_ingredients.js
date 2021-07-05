
exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id:1, quantity:10},
    { recipe_id: 1, ingredient_id:2, quantity:20},
    { recipe_id: 1, ingredient_id:3, quantity:30},
    { recipe_id: 2, ingredient_id:4, quantity:40},
    { recipe_id: 2, ingredient_id:5, quantity:50},
    { recipe_id: 2, ingredient_id:6, quantity:60},
    { recipe_id: 3, ingredient_id:7, quantity:70},
    { recipe_id: 3, ingredient_id:8, quantity:80},
    { recipe_id: 3, ingredient_id:9, quantity:90}
  ]);
}

exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", recipes => {
            recipes.increments();

            recipes.string("name", 255).notNullable();
            recipes.string("steps", 255).notNullable();
        })
        .createTable("ingredients", ingredients => {
            ingredients.increments();
            ingredients.string("name", 255).notNullable();
        })
        .createTable("recipe_ingredients", recipeIngredients => {
            recipeIngredients.increments();

            recipeIngredients
                .integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            recipeIngredients
                .integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            recipeIngredients
                .string("quantity", 255)
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};

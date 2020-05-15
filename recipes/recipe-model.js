const db = require("../data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
//GET
function getRecipes() {
    return db("recipes")
}
function getShoppingList(recipe_id) {
    // const id = Number(recipe_id)
    return db("recipes as r")
        .join('recipe_ingredients as c', 'c.recipe_id', 'r.id')
        .join('ingredients as i', 'i.id', 'c.ingredient_id')
        .select('r.name','i.name', 'c.quantity')
        .where( {'c.recipe_id':recipe_id})
    // .first()
}
function getInstructions(id) {
    return db("recipes")
        .select('steps')
        .where({ id })
}

// `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe 

// select *
// from orders as o
// join customers as c on o.customer_id = c.customer_id
// join employees as e on o.employee_id = e.employee_id
// join shippers as s on o.ship_via = s.shipper_id
// join order_details as od on o.order_id = od.order_id
// join products as p on od.product_id = p.product_id;

// function findSteps(input_id) {
//     return db('schemes as s')
//     .join('steps as u', 'u.scheme_id', 's.id')
//     .select('u.id', 's.scheme_name', 'u.instructions')
//     .where('s.id', input_id)
//     .orderBy('u.id');
// }
//POST
// function add(scheme) {
//     return db("recipes")
//         .insert(scheme, "id")
//         .then(ids => {
//             return findById(ids[0]);
//         });
// }
// function addStep(step, id) {
//     return db("recipes")
//         .insert(step)
//         .where({ scheme_id })//this probably works. dont need to join, since we're working on a step. you'll get joins mainly from get requests, not post requests
//     //go to make model simple as possible
// }
// /*
// db('users') => a promise that resolves to a user
// findById  => a promise that resolves to a user
// add  => a promise that resolves to a user
// post
// */

// //UD
// function update(changes, id) {
//     return db("recipes")
//         .where({ id })
//         .update(changes)
// }
// function remove(id) {
//     return db("recipes")
//         .where({ id })
//         .del()
// }
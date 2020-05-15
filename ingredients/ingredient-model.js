const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    addStep,
    update,
    remove
}
//GET
function find() {
    return db("ingredients")
}
function findById(id) {
    return db("ingredients")
        .where({ id })
        .first()
}
// function findSteps(input_id) {
//     return db('schemes as s')
//     .join('steps as u', 'u.scheme_id', 's.id')
//     .select('u.id', 's.scheme_name', 'u.instructions')
//     .where('s.id', input_id)
//     .orderBy('u.id');
// }
//POST
function add(scheme) {
    return db("ingredients")
      .insert(scheme, "id")
      .then(ids => {
        return findById(ids[0]);
      });
  }
  function addStep(step, id) {
    return db("ingredients")
      .insert(step)
      .where({scheme_id})//this probably works. dont need to join, since we're working on a step. you'll get joins mainly from get requests, not post requests
      //go to make model simple as possible
  }
  /*
  db('users') => a promise that resolves to a user
  findById  => a promise that resolves to a user
  add  => a promise that resolves to a user
  post
  */

//UD
function update(changes, id) {
    return db("ingredients")
        .where({ id })
        .update(changes)
}
function remove(id) {
    return db("ingredients")
        .where({ id })
        .del()
}
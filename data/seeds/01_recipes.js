
exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'testname1', steps: 'just do some garbage1' },
    { name: 'testname2', steps: 'just do some garbage2' },
    { name: 'testname2', steps: 'just do some garbage3' }
  ]);
}

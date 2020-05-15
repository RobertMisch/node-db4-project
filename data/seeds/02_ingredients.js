
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'apple1' },
    { name: 'banana1' },
    { name: 'chocolate1' },
    { name: 'apple2' },
    { name: 'banana2' },
    { name: 'chocolate2' },
    { name: 'apple3' },
    { name: 'banana3' },
    { name: 'chocolate3' }
  ]);
}

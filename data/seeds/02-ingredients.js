
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'whiskey'},
        {ingredient_name: 'drop of water'},
        {ingredient_name: 'tequila'},
        {ingredient_name: 'ginger beer'},
        {ingredient_name: 'fernet'},
        {ingredient_name: 'coca cola'}
      ]);
    });
};

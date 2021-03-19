exports.seed = function(knex) {
  return knex('step_ingredients')
  .del()
  .then(function () {
    return knex('step_ingredients').insert([   
      { step_id: 1},
      { step_id: 2, quantity: 1, ingredients_id: 1 },
      { step_id: 3, quantity: 2, ingredients_id: 2 },
      { step_id: 4, quantity: 1, ingredients_id: 3 },
      { step_id: 5, quantity: 1, ingredients_id: 4 },
    ]);
  });
};
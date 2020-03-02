
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, user_id: 1, location: 'Lagos', item: 'Okra', description: '500g Package', price: 4},
        {id: 2, user_id: 2, location: 'Dullstroom', item: 'Pigeon Peas', description: '200g package', price: 5},
        {id: 3, user_id: 3, location: 'Gariepdam', item: 'Balsam Apples', description: '300g bag', price: 6}
      ]);
    });
};
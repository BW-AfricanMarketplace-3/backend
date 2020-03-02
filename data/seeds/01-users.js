
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Amare', password: 'testpass', profile_pic_url: null},
        {id: 2, username: 'Kwame', password: 'testpass', profile_pic_url: null},
        {id: 3, username: 'Daliah', password: 'testpass', profile_pic_url: null}
      ]);
    });
};

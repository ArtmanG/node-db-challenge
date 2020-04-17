
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'Computer 1', description: 'sits on Desk 1' },
        { id: 2, name: 'Computer 2', description: 'sits on Desk 2'},
        { id: 3, name: 'Desk 1', description: 'Computer 1 goes here'},
        { id: 4, name: 'Desk 2', description: 'Computer 2 goes here'},
        { id: 5, name: 'Pen', description: 'on Desk 1' },
        { id: 6, name: 'Pen', description: 'on Desk 3' }
      ]);
    });
};

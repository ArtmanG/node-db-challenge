
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Project 1', description: 'First!', completed: 1 },
        { id: 2, name: 'Project 2', description: 'Then me', completed: 0 },
        { id: 3, name: 'Project 3', completed: 0 }
      ]);
    });
};

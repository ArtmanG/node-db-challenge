
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Do it', notes: 'I\'m the only note', completed: 'true', project_id: 1 },
        {id: 2, description: 'Gotta do it', completed: 'false', project_id: 1 },
        {id: 3, description: 'Just do it', completed: 'false', project_id: 2 },
        {id: 4, description: 'Please do it', completed: 'false', project_id: 3 },
        {id: 5, description: 'Why won\'t you do it', completed: 'false', project_id: 3 },
        {id: 6, description: 'Fine don\'t do it', completed: 'false', project_id: 2 }
      ]);
    });
};

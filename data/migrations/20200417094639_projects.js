exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name').notNullable();
            tbl.string('project_description');
            tbl.boolean('project_completed').defaultTo(0);
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name').notNullable();
            tbl.string('resource_description');
        })

        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description').notNullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed').defaultTo(0);
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects');
};

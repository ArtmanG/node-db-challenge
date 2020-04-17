const db = require('../db-config');

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    getResources,
    createResource,
    getTasks,
    addTasks
};

//PROJECTS
function getProjects() {
    return db('projects');
};

function getProjectById(id) {
    return db('projects')
    .where({ id })
    .first()
};

function createProject(newProject) {
    return db('projects')
        .insert(newProject);
};


//RESOURCES
function getResources() {
    return db('resources');
};

function createResource(newResources){
    return db('resources')
        .insert(newResources);
};


//TASKS
function getTasks(id) {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as project_name', 'projects.description as project_description')
};

function addTasks(newTask) {
    return db('tasks')
        .insert(newTask);
};
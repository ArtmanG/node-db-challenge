const db = require('../data/db-config');

module.exports = {
    getProjects,
    createProject,
    getResources,
    createResource,
    getTasks,
    addTaskToProject
};

//PROJECTS
function getProjects() {
    return db('projects');
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
      .select("tasks.id", "tasks.description", "projects.name")
      .join('projects', 'projects.id', 'tasks.project_id')
      .where("project_id", id); 
};

function addTaskToProject(newTask) {
    return db('tasks')
        .insert(newTask);
};
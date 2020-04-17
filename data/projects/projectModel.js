const db = require('../db-config');

module.exports = {
    getProjects,
    createProject,
    getResources,
    createResource,
    getTasks,
    addTask
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

function addTask(newTask) {
    return db('tasks')
        .insert(newTask);
};
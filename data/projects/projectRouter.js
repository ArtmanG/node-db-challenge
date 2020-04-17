const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

//PROJECTS
router.get('/', (req, res) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json({ projects })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({ message: 'Projects could not be retrieved' });
        });
});

router.post('/', (req, res) => {
    Projects.createProject(req.body)
        .then((ids) => {
            res.status(201).json({ id: ids[0] })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({ message: 'Project could not be created' });
        });
});


//RESOURCES
router.get('/resources', (req, res) => {
    Projects.getResources()
        .then((resources) => {
            res.status(200).json({ resources })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({ message: 'Resources could not be retrieved' });
        });
});

router.post('/resources', (req, res) => {
    Projects.createResource(req.body) 
        .then((ids) => {
            res.status(201).json({ id: ids[0] })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({ message: 'Resource could not be created'});
        });
});


//TASKS
router.get('/:id/tasks', (req, res) => {
    Projects.getTasks()
        .then((tasks) => {
            res.status(200).json({ tasks })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({ message: 'Tasks could not be retrieved' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params
    Projects.addTasks(req.body, id)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Failed to add a task to project" })
    })
});



module.exports = router;
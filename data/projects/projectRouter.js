const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        if (projects.length > 0) {
            res.status(201).json(projects);
        } else {
            res.status(404).json({ message: 'These are not the Projects you are looking for' })
        }
    })
    .catch(error => {
        console.log(error.message, error)
    })
})

module.exports = router;
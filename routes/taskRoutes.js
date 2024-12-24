// routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/', taskController.getAllTasks);
router.get('/create', taskController.renderCreateForm);
router.post('/create', taskController.createTask);
router.get('/edit/:id', taskController.renderEditForm);
router.post('/edit/:id', taskController.updateTask);
router.post('/delete/:id', taskController.deleteTask);

module.exports = router;

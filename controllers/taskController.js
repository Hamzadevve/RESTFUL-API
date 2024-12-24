// controllers/taskController.js
const Task = require('../models/task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Render create task form
exports.renderCreateForm = (req, res) => {
  res.render('create');
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Render edit task form
exports.renderEditForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.render('edit', { task });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
      title,
      description,
      completed: completed === 'on',
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

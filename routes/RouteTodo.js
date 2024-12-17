const express = require('express');
const router = express.Router();
const todo = require('../controller/ToDoController');

router.get('/', todo.getToDoList); //View ALL Data
router.get('/:id', todo.getIdToDoList); //View Id Data
router.post('/', todo.createToDoList); //new Data
router.put('/:id', todo.UpdateToDoList); //update Data
router.delete('/:id', todo.DelToDoList); //delete data

module.exports = router;
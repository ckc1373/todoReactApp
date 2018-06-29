const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js')

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
      task: req.body.taskText
    });
    testTodo.save()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
    });

router.get('/all', (req, res) => {
  TodoItem.find({})
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error)
  })
})

router.post('/toggle', (req, res) => {
    TodoItem.findById(req.body.id)
      .then(response => {
        (response.completed)?response.completed = false: response.completed = true;
        return response.save()
      })
      .then(success => {
        res.send(success)
      })
      .catch(error => {
        res.send(error);
      })
    });


router.post('/remove', (req, res) => {
    TodoItem.findByIdAndRemove(req.body.id)
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
    });


module.exports = router;

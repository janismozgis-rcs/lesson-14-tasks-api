import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();


// GET /tasks - returns list of all the tasks
// POST /tasks - create a new task. {"title": "foo", "isCompleted": true, "labels": [123, 321]}
// PUT /tasks/{id} - update the task {"title": "foo", "isCompleted": true, "labels": [123, 321]}
// DELETE /tasks/{id} - deletes a task

router.get('/', (req, res) => {
    // returns list of all the tasks
    res.json([]);
});

router.post('/', async (req, res) => {
    const newTaskData = {
        title: req.body.title,
        labels: req.body.labels,
    };
    const task = new Task(newTaskData);
    const taskEntity = await task.save();
    res.json(taskEntity);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    // update the task
    res.json({success: true});
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    // deletes a task
    res.json({success: true});
});

export default router;
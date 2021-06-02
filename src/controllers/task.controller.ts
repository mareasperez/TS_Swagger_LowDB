import { Handler } from "express";
import { getConnection } from "../db";
import { nanoid } from "nanoid";


export const getTasks: Handler = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    return res.json(tasks)
}

export const getTaskCount: Handler = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    return res.json(tasks.length)
}
export const createTask: Handler = (req, res) => {
    const { name, description } = req.body;
    const newTask = { name, description, id: nanoid() };
    try {
        getConnection().get('tasks').push(newTask).write();
    } catch (error) {
        res.status(500).send(error);
    }
    return res.json(newTask);
}
export const getTask: Handler = (req, res) => {
    const task = getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!task) return res.status(404).send({ error: 'Task not found' });
    return res.json(task);
}
export const updateTask: Handler = (req, res) => {
    const task = getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!task) return res.status(404).send({ error: 'Task not found' });
    const updatedTask = getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();
    return res.json(updatedTask)
}
export const deleteTask: Handler = (req, res) => {
    const task = getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!task) return res.status(404).send({ error: 'Task not found' });
    const deletedTask = getConnection()
        .get("tasks")
        .remove({ id: req.params.id })
        .write();
    return res.json(deletedTask)
}
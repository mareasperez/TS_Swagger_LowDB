import { Router } from 'express'
import { createTask, deleteTask, getTask, getTaskCount, getTasks } from '../controllers/task.controller'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', getTaskCount)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', (req, res) => { res.send('hello world') })
router.delete('/tasks/:id', deleteTask)


export default router
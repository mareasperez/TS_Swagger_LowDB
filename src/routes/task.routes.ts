import { Router } from 'express'
import { createTask, deleteTask, getTask, getTaskCount, getTasks } from '../controllers/task.controller'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: the name of the task
 *              description:
 *                  type: string
 *                  desciption: the description of the task
 *          required:
 *              - name
 *              - description
 *          example:
 *              id: wertyuihgfdfghj-
 *              name: task name
 *              description: desc of task
 */
/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Return task list
 *      responses: 
 *         200:
 *           description: the list of tasks returned
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/Task'
 */
router.get('/tasks', getTasks)
router.get('/tasks/count', getTaskCount)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', (req, res) => { res.send('hello world') })
router.delete('/tasks/:id', deleteTask)


export default router
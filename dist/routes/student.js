import { Router } from 'express';
import { createStudent, getAllStudents, getStudentById, getStudentWithCourse, updateStudent, deleteStudent, } from '../controllers/studentController.js';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API for managing students
 */
/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Returns all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *   post:
 *     summary: Creates a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudent'
 *     responses:
 *       201:
 *         description: The created student.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 */
/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Returns a single student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: A single student.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *   put:
 *     summary: Updates a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The student id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudent'
 *     responses:
 *       200:
 *         description: The updated student.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *   delete:
 *     summary: Deletes a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The student id
 *     responses:
 *       204:
 *         description: The student was deleted.
 */
/**
 * @swagger
 * /api/students/{id}/course:
 *   get:
 *     summary: Returns a student with their course
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: A student with their course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentWithCourse'
 */
router.post('/students', createStudent);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.get('/students/:id/course', getStudentWithCourse);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
export default router;

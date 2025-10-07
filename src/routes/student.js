"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const router = (0, express_1.Router)();
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
router.post('/students', studentController_1.createStudent);
router.get('/students', studentController_1.getAllStudents);
router.get('/students/:id', studentController_1.getStudentById);
router.get('/students/:id/course', studentController_1.getStudentWithCourse);
router.put('/students/:id', studentController_1.updateStudent);
router.delete('/students/:id', studentController_1.deleteStudent);
exports.default = router;
//# sourceMappingURL=student.js.map
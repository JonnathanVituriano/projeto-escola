"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: API for managing courses
 */
/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Returns all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *   post:
 *     summary: Creates a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCourse'
 *     responses:
 *       201:
 *         description: The created course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */
/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Returns a single course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course id
 *     responses:
 *       200:
 *         description: A single course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *   put:
 *     summary: Updates a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCourse'
 *     responses:
 *       200:
 *         description: The updated course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *   delete:
 *     summary: Deletes a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course id
 *     responses:
 *       204:
 *         description: The course was deleted.
 */
router.post('/courses', courseController_1.createCourse);
router.get('/courses', courseController_1.getAllCourses);
router.get('/courses/:id', courseController_1.getCourseById);
router.put('/courses/:id', courseController_1.updateCourse);
router.delete('/courses/:id', courseController_1.deleteCourse);
exports.default = router;
//# sourceMappingURL=course.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("../controllers/schoolController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Schools
 *   description: API for managing schools
 */
/**
 * @swagger
 * /api/schools:
 *   get:
 *     summary: Returns all schools
 *     tags: [Schools]
 *     responses:
 *       200:
 *         description: A list of schools.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 *   post:
 *     summary: Creates a new school
 *     tags: [Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSchool'
 *     responses:
 *       201:
 *         description: The created school.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 */
/**
 * @swagger
 * /api/schools/{id}:
 *   get:
 *     summary: Returns a single school
 *     tags: [Schools]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The school id
 *     responses:
 *       200:
 *         description: A single school.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *   put:
 *     summary: Updates a school
 *     tags: [Schools]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The school id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSchool'
 *     responses:
 *       200:
 *         description: The updated school.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *   delete:
 *     summary: Deletes a school
 *     tags: [Schools]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The school id
 *     responses:
 *       204:
 *         description: The school was deleted.
 */
router.post('/schools', schoolController_1.createSchool);
router.get('/schools', schoolController_1.getAllSchools);
router.get('/schools/:id', schoolController_1.getSchoolById);
router.put('/schools/:id', schoolController_1.updateSchool);
router.delete('/schools/:id', schoolController_1.deleteSchool);
exports.default = router;
//# sourceMappingURL=school.js.map
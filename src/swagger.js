"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The school ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The school's name.
 *           example: My School
 *     CreateSchool:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The school's name.
 *           example: My School
 *     UpdateSchool:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The school's name.
 *           example: My School
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The course ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The course's name.
 *           example: My Course
 *         schoolId:
 *           type: integer
 *           description: The school's ID.
 *           example: 1
 *     CreateCourse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The course's name.
 *           example: My Course
 *         schoolId:
 *           type: integer
 *           description: The school's ID.
 *           example: 1
 *     UpdateCourse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The course's name.
 *           example: My Course
 *         schoolId:
 *           type: integer
 *           description: The school's ID.
 *           example: 1
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The student ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The student's name.
 *           example: My Student
 *         courseId:
 *           type: integer
 *           description: The course's ID.
 *           example: 1
 *     CreateStudent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The student's name.
 *           example: My Student
 *         courseId:
 *           type: integer
 *           description: The course's ID.
 *           example: 1
 *     UpdateStudent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The student's name.
 *           example: My Student
 *         courseId:
 *           type: integer
 *           description: The course's ID.
 *           example: 1
 *     StudentWithCourse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The student ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The student's name.
 *           example: My Student
 *         courseId:
 *           type: integer
 *           description: The course's ID.
 *           example: 1
 *         course:
 *           $ref: '#/components/schemas/Course'
 */
//# sourceMappingURL=swagger.js.map
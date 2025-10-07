"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.createCourse = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const course_1 = require("../validations/course");
const prisma = new client_1.PrismaClient();
const createCourse = async (req, res) => {
    try {
        const course = course_1.createCourseSchema.parse(req.body);
        const newCourse = await prisma.course.create({ data: course });
        res.status(201).json(newCourse);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.createCourse = createCourse;
const getAllCourses = async (req, res) => {
    const courses = await prisma.course.findMany();
    res.json(courses);
};
exports.getAllCourses = getAllCourses;
const getCourseById = async (req, res) => {
    const { id } = req.params;
    const course = await prisma.course.findUnique({ where: { id: Number(id) } });
    if (course) {
        res.json(course);
    }
    else {
        res.status(404).json({ error: 'Course not found' });
    }
};
exports.getCourseById = getCourseById;
const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = course_1.updateCourseSchema.parse(req.body);
        const updatedCourse = await prisma.course.update({
            where: { id: Number(id) },
            data: course,
        });
        res.json(updatedCourse);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.updateCourse = updateCourse;
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await prisma.course.delete({ where: { id: Number(id) } });
    res.status(204).send();
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=courseController.js.map
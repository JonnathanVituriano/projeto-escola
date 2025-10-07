"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentWithCourse = exports.getStudentById = exports.getAllStudents = exports.createStudent = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const student_1 = require("../validations/student");
const prisma = new client_1.PrismaClient();
const createStudent = async (req, res) => {
    try {
        const student = student_1.createStudentSchema.parse(req.body);
        const newStudent = await prisma.student.create({ data: student });
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.createStudent = createStudent;
const getAllStudents = async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
};
exports.getAllStudents = getAllStudents;
const getStudentById = async (req, res) => {
    const { id } = req.params;
    const student = await prisma.student.findUnique({ where: { id: Number(id) } });
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({ error: 'Student not found' });
    }
};
exports.getStudentById = getStudentById;
const getStudentWithCourse = async (req, res) => {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
        where: { id: Number(id) },
        include: { course: true },
    });
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({ error: 'Student not found' });
    }
};
exports.getStudentWithCourse = getStudentWithCourse;
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = student_1.updateStudentSchema.parse(req.body);
        const updatedStudent = await prisma.student.update({
            where: { id: Number(id) },
            data: student,
        });
        res.json(updatedStudent);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await prisma.student.delete({ where: { id: Number(id) } });
    res.status(204).send();
};
exports.deleteStudent = deleteStudent;
//# sourceMappingURL=studentController.js.map
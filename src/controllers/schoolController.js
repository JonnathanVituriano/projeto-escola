"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchool = exports.updateSchool = exports.getSchoolById = exports.getAllSchools = exports.createSchool = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const school_1 = require("../validations/school");
const prisma = new client_1.PrismaClient();
const createSchool = async (req, res) => {
    try {
        const school = school_1.createSchoolSchema.parse(req.body);
        const newSchool = await prisma.school.create({ data: school });
        res.status(201).json(newSchool);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.createSchool = createSchool;
const getAllSchools = async (req, res) => {
    const schools = await prisma.school.findMany();
    res.json(schools);
};
exports.getAllSchools = getAllSchools;
const getSchoolById = async (req, res) => {
    const { id } = req.params;
    const school = await prisma.school.findUnique({ where: { id: Number(id) } });
    if (school) {
        res.json(school);
    }
    else {
        res.status(404).json({ error: 'School not found' });
    }
};
exports.getSchoolById = getSchoolById;
const updateSchool = async (req, res) => {
    try {
        const { id } = req.params;
        const school = school_1.updateSchoolSchema.parse(req.body);
        const updatedSchool = await prisma.school.update({
            where: { id: Number(id) },
            data: school,
        });
        res.json(updatedSchool);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
};
exports.updateSchool = updateSchool;
const deleteSchool = async (req, res) => {
    const { id } = req.params;
    await prisma.school.delete({ where: { id: Number(id) } });
    res.status(204).send();
};
exports.deleteSchool = deleteSchool;
//# sourceMappingURL=schoolController.js.map
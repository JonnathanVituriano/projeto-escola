
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createStudentSchema, updateStudentSchema } from '../validations/student.js';

const prisma = new PrismaClient();

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = createStudentSchema.parse(req.body);
    const newStudent = await prisma.student.create({ data: student });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  res.json(students);
};

export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({ where: { id: Number(id) } });
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
};

export const getStudentWithCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({
    where: { id: Number(id) },
    include: { course: true },
  });
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = updateStudentSchema.parse(req.body);
    const updatedStudent = await prisma.student.update({
      where: { id: Number(id) },
      data: student,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.student.delete({ where: { id: Number(id) } });
  res.status(204).send();
};


import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createCourseSchema, updateCourseSchema } from '../validations/course.js';

const prisma = new PrismaClient();

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = createCourseSchema.parse(req.body);
    const newCourse = await prisma.course.create({ data: course });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany();
  res.json(courses);
};

export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await prisma.course.findUnique({ where: { id: Number(id) } });
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = updateCourseSchema.parse(req.body);
    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: course,
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.course.delete({ where: { id: Number(id) } });
  res.status(204).send();
};


import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createSchoolSchema, updateSchoolSchema } from '../validations/school.js';

const prisma = new PrismaClient();

export const createSchool = async (req: Request, res: Response) => {
  try {
    const school = createSchoolSchema.parse(req.body);
    const newSchool = await prisma.school.create({ data: school });
    res.status(201).json(newSchool);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllSchools = async (req: Request, res: Response) => {
  const schools = await prisma.school.findMany();
  res.json(schools);
};

export const getSchoolById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const school = await prisma.school.findUnique({ where: { id: Number(id) } });
  if (school) {
    res.json(school);
  } else {
    res.status(404).json({ error: 'School not found' });
  }
};

export const updateSchool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const school = updateSchoolSchema.parse(req.body);
    const updatedSchool = await prisma.school.update({
      where: { id: Number(id) },
      data: school,
    });
    res.json(updatedSchool);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteSchool = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.school.delete({ where: { id: Number(id) } });
  res.status(204).send();
};

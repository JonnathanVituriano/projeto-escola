import { z } from 'zod';

export const createCourseSchema = z.object({
  name: z.string(),
  schoolId: z.number(),
});

export const updateCourseSchema = z.object({
  name: z.string(),
  schoolId: z.number(),
});

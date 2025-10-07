import { z } from 'zod';

export const createStudentSchema = z.object({
  name: z.string(),
  courseId: z.number(),
});

export const updateStudentSchema = z.object({
  name: z.string(),
  courseId: z.number(),
});

import { z } from 'zod';
export const createSchoolSchema = z.object({
    name: z.string(),
});
export const updateSchoolSchema = z.object({
    name: z.string(),
});

import { z } from 'zod';
export declare const createCourseSchema: z.ZodObject<{
    name: z.ZodString;
    schoolId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateCourseSchema: z.ZodObject<{
    name: z.ZodString;
    schoolId: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=course.d.ts.map
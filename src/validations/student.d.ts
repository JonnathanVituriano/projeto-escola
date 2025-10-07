import { z } from 'zod';
export declare const createStudentSchema: z.ZodObject<{
    name: z.ZodString;
    courseId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateStudentSchema: z.ZodObject<{
    name: z.ZodString;
    courseId: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=student.d.ts.map
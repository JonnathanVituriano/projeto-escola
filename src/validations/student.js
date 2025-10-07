"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentSchema = exports.createStudentSchema = void 0;
const zod_1 = require("zod");
exports.createStudentSchema = zod_1.z.object({
    name: zod_1.z.string(),
    courseId: zod_1.z.number(),
});
exports.updateStudentSchema = zod_1.z.object({
    name: zod_1.z.string(),
    courseId: zod_1.z.number(),
});
//# sourceMappingURL=student.js.map
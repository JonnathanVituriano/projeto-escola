"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourseSchema = exports.createCourseSchema = void 0;
const zod_1 = require("zod");
exports.createCourseSchema = zod_1.z.object({
    name: zod_1.z.string(),
    schoolId: zod_1.z.number(),
});
exports.updateCourseSchema = zod_1.z.object({
    name: zod_1.z.string(),
    schoolId: zod_1.z.number(),
});
//# sourceMappingURL=course.js.map
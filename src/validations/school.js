"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchoolSchema = exports.createSchoolSchema = void 0;
const zod_1 = require("zod");
exports.createSchoolSchema = zod_1.z.object({
    name: zod_1.z.string(),
});
exports.updateSchoolSchema = zod_1.z.object({
    name: zod_1.z.string(),
});
//# sourceMappingURL=school.js.map
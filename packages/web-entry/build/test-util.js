"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { isNumber, isPrimitive, dedupeArray } from '@dp/web-utils';
// import { dedupeArray } from '@dp/web-utils/src/array-fn';
// import { isNumber, isPrimitive } from '@dp/web-utils/src/type-guard';
const web_utils_1 = require("@dp/web-utils");
console.log('we are gonna verify if this is a number or not ', web_utils_1.isNumber(NaN));
console.log('we are gonna verify if this is a primitive or not ', web_utils_1.isPrimitive('confirmed'));
const arr = [
    1, 2, 31, 2, 42, 3, 12, 31, 23, 1, 24, 1, 23, 15, 12, 3, 123, 123, 221, 4, 5,
    5, 4, 6,
];
console.log(web_utils_1.dedupeArray(arr).sort((a, b) => a - b));
//# sourceMappingURL=test-util.js.map
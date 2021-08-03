"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isNumber = exports.isPrimitive = exports.isNil = exports.isDefined = void 0;
const isDefined = (value) => typeof value !== 'undefined';
exports.isDefined = isDefined;
const isNil = (value) => typeof value === 'undefined' || value === null;
exports.isNil = isNil;
const isPrimitive = (value) => /^(b|st|n)/.test(typeof value);
exports.isPrimitive = isPrimitive;
const isNumber = (value) => {
    return typeof value === 'number' && !Number.isNaN(value);
};
exports.isNumber = isNumber;
const isBoolean = (value) => typeof value === 'boolean';
exports.isBoolean = isBoolean;
//# sourceMappingURL=type-guard.js.map
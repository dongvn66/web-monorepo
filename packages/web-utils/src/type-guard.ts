export const isDefined = <T>(value: T | undefined): value is T =>
  typeof value !== 'undefined';

export const isNil = (value: any): value is undefined | null =>
  typeof value === 'undefined' || value === null;

export const isPrimitive = (value: any): value is string | number | boolean =>
  /^(b|st|n)/.test(typeof value);

export const isNumber = (value: any): value is number => {
  return typeof value === 'number' && !Number.isNaN(value);
};

export const isBoolean = (value: any): value is boolean =>
  typeof value === 'boolean';

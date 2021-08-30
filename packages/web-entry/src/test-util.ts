import { dedupeArray, isNumber, isPrimitive } from '@dp/web-utils';

console.log('we are gonna verify if this is a number or not ', isNumber(NaN));
console.log(
  'we are gonna verify if this is a primitive or not ',
  isPrimitive('confirmed')
);

const arr = [
  1, 2, 31, 2, 42, 3, 12, 31, 23, 1, 24, 1, 23, 15, 12, 3, 123, 123, 221, 4, 5,
  5, 4, 6,
];
console.log(dedupeArray(arr).sort((a, b) => a - b));

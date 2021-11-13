const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

//TEST CASES
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]

console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual.js');

//TEST RUN
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

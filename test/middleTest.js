const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

//TEST CODE
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2, 3]

assertArraysEqual(middle([1, 2, 3]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([3, 2, 1]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4]));
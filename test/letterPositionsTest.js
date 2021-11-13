const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//TEST CASES
console.log(letterPositions("hello"))
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));



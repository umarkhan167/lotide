const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');


//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//Should return: [ 1, 2, 5, 7, 2 ]

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
const assertEqual = require('../assertEqual')
const head = require('../head.js')


// TEST CODE
assertEqual(head([4,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log(head([5,6,7]));
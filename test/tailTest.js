const assertEqual = require('../assertEqual')
const tail = require('../tail.js')

//TEST CODE
const result = ["Hello", "Lighthouse", "Labs"];
tail(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

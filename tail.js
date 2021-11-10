// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed:   ${actual}   ===  ${expected}`);
//   } else {
//     console.log(`Assertion Failed:   ${actual}   !==  ${expected}`);
//   }
// };

const tail = function(array) {
  array = array.slice(-1).pop();
  return array;
};


module.exports = tail;
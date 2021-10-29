//eqOjects FUNCTION

// 1. Compares two objects with one another to see if they have identical keys with identical values.
// 2. Otherwise, return false.

const eqObjects = function(object1, object2) {
  //turning both objects' keys into arrays for easier looping
  const key1 = Object.keys(object1); 
  const key2 = Object.keys(object2);
  //Immediatley if the length for both the object keys aren't the same then return false
  if (key1.length !== key2.length) {
    return false
  }
  //Now loop through the value for each key
  for (let key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  //if all the keys DO match, then return true
  return true

}


//assertObjectsEqual.js FUNCTION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:   ${inspect(actual)}   ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:   ${inspect(actual)}   !==  ${inspect(expected)}`);
  }

};


assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'})
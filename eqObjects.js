// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:   ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:   ${actual}   !==  ${expected}`);
  }
};

// TEST CODE
//assertEqual("LHL", "LHL");
//assertEqual(4, 64);

//eqArrays FUNCTION

const eqArrays = function(array1, array2) {
  if (array1 == null || array2 == null) return false;   
  if (array1.length !== array2.length) return false;

  for (let i = 0; i<array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
  }
  } return true
}


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
    //compare the values throughout each objects' keys and if any of them aren't the same, return false
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: '3' };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3], e: 1 };
const dc = { d: ["2", 3], c: "1", e: 2 };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
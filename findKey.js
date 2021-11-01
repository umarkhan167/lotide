// assertEqual FUNCTION IMPLEMENTATION
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


//findKey FUNCTION

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const objectValue = object[key];
    if (callback(objectValue)) {
      return key
    } 
  }
}

//FInd Key By Value FUNCTION

// const findKeyByValue = function(object, value) {
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     const objectValue = object[key];
//     if (objectValue === value) {
//       return key
//     } 
//   }
// }

//CALL findKey function

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri")); 

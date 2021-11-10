
//ASSERT EQUAL FUNCTION
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

//TEST RUN
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS


const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

console.log(runner(myFn));
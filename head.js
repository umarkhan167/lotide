// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:   ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:   ${actual}   !==  ${expected}`);
  }
};

const head = function(array) {
    return array[0]
}

// TEST CODE
assertEqual(head([4,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log(head([5,6,7]));

//assertEqual("LHL", "LHL");
//assertEqual(4, 64);

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



//assertArraysEqual FUNCTION

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed:   ${arr1}   ===  ${arr2}`);
  } else {
    console.log(`Assertion Failed:   ${arr1}   !==  ${arr2}`);
  }
};

//TEST RUN
//assertArraysEqual(([1, 2, 3], [1, 2, 3]));



//middle FUNCTION

const middle = function(middleArray) {
  let middleElement = []
  let index = Math.floor(middleArray.length / 2)
  if (middleArray.length <= 2) {
    return middleElement;
  } else if (middleArray.length % 2 === 0) {
    middleElement.push(middleArray[(index) - 1]);
    middleElement.push(middleArray[index]);
  } else {
    middleElement.push(middleArray[index]);
  }
  return middleElement;
}



//TEST CODE
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2, 3]

assertArraysEqual(middle([1, 2, 3]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([3, 2, 1]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4]));

assertArraysEqual(eqArrays([1, 2], [2, 2]), false);

console.log(eqArrays([1, 2], [1, 2]));
console.log(eqArrays([1, 2, 4], [1]));
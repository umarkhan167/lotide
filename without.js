//assertArraysEqual FUNCTION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed:   ${arr1}   ===  ${arr2}`);
  } else {
    console.log(`Assertion Failed:   ${arr1}   !==  ${arr2}`);
  }
};

//TEST RUN
//assertArraysEqual([1, 2, 3], [1, 2, 3]);


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


//without FUNCTION

const without = function(source, itemsToRemove) {
  for (let x = 0; x<source.length; x++) {
    for (let y = 0; y<itemsToRemove; y++) {
      if (itemsToRemove[y] === source[x]) {
        source.splice(x, 1)
      }
    }
  }
  return source
}



const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//PSEUDO CODE

/* 

*/
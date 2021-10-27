//ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:   ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:   ${actual}   !==  ${expected}`);
  }
};



// count letters FUNCITON

const countLetters = function(sentence) {
  let finalCount = {};
  //letter is used to represent a key for the finalCount object
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (finalCount[letter]) {
        finalCount[letter] += 1;
      } else {
        finalCount[letter] = 1;
      }
    }
  }
  return finalCount
}

const result = countLetters('Lighthouse Labs');

console.log(assertEqual(result['L'], 2));
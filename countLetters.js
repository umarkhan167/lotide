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

module.exports = countLetters;
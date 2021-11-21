//without FUNCTION

const without = function(source, itemsToRemove) {
  for (let x = 0; x<source.length; x++) {
    for (let y = 0; y<itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        source.splice(x, 1)
      }
    }
    
  }
  return source;
}

module.exports = without;


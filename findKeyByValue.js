//FInd Key By Value FUNCTION

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const objectValue = object[key];
    if (objectValue === value) {
      return key
    } 
  }
}

module.exports = findKeyByValue;
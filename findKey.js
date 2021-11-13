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


module.exports = findKey;
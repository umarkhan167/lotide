//countOnly FUNCTION 
// 1. takes in a collection of items and returns count for specific set of items.
// 2. In order to decide what to count, it will be given an idea of which items we care about and it will only count those, ignoring the others.
// 3. Items in our case will be limited to Strings

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;
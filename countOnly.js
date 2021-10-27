//ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:   ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:   ${actual}   !==  ${expected}`);
  }
};

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


//TEST CASES

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
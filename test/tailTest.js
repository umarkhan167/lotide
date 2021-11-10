const assert = require('chai').assert;
const tail = require('../tail.js')

//TEST CODE
// const result = ["Hello", "Lighthouse", "Labs"];
// tail(result);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


describe("#tail", () => { 
  it("returns [3] for [1, 2, 3]", () => {
   assert.deepEqual(tail([1, 2, 3]), 3);
  });
  it(`returns ['Labs'] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
   });
})

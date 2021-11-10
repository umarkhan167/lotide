//const assertEqual = require('../assertEqual') - no longer needed
const assert = require('chai').assert; // Used assertion function from Chai's assertion library, so no need for assertEqual anymore. Works well when paired with Mocha.
const head = require('../head');

//Running tests using Mocha. Mocha gives us the describe and it functions. Each it is a test, and each test should have at least one assertion.
describe("#head", () => { 
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 4 for [4,6,7]", () => {
    assert.strictEqual(head([4,6,7]), 4);
  });
  it (`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
});
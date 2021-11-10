const middle = require('../middle.js');
const assert = require('chai').assert; // Used assertion function from Chai's assertion library, so no need for assertEqual anymore. Works well when paired with Mocha.

describe("#middle", () => { 
  it("returns [2] for [1, 2, 3]", () => {
   assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
});
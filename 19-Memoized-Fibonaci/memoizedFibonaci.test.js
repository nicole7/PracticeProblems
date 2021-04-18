mocha.setup("bdd");
const { assert } = chai;

describe("Memoized Fibonacci", () => {
  it("Should implement memoized fibonacci", () => {
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
    assert.equal(_memoized_fibonacci(10), 55);
  });
});

mocha.run();




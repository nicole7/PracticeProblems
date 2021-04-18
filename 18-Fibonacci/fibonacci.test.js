mocha.setup("bdd");
const { assert } = chai;

describe("Fibonacci", () => {
    it("Should implement fibonacci", () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(3), 2);
      assert.equal(fibonacci(6), 8);
      assert.equal(fibonacci(10), 55);
      assert.equal(_fibonacci(1), 1);
      assert.equal(_fibonacci(2), 1);
      assert.equal(_fibonacci(3), 2);
      assert.equal(_fibonacci(10), 55);
    });
  });
  
  mocha.run();


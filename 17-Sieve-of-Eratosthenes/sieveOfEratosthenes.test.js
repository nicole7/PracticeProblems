mocha.setup("bdd");
const { assert } = chai;

describe("Sieve or Eratosthenes", () => {
    it("should return all prime numbers", () => {
        assert.deepEqual(primes(10), [2, 3, 5, 7]);
    })
 })
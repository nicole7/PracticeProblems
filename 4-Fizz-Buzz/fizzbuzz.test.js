mocha.setup("bdd");
const { assert } = chai;

describe("fizzBuzz", () => {
    beforeEach(() => (output = fizzBuzz(30)));
    it("should output number", () => {
        assert.equal(output[0], 5);
    });
    it("should output Fizz", () => {
        assert.equal(output[1], "Fizz");
    });
    it("should output Buzz", () => {
        assert.equal(output[2], "Buzz");
    });
    it("should output Fizz Buzz", () => {
        assert.equal(output[5], "FizzBuzz");
    });
});

mocha.run();


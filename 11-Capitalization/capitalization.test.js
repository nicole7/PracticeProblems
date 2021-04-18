mocha.setup("bdd");
const { assert } = chai;

describe("Function takes in string of words", () => {
    it("should return every words with the first letter capitalized", () => {
        assert.equal(capitalize("hello world"), "Hello World");
        assert.equal(_capitalize("hello world"), "Hello World");
    });
});
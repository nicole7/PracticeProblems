mocha.setup("bdd");
const { assert } = chai;

describe("The function", () => {
    it("takes a phrase and returns the reversed the words", () => {
        assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
        assert.equal(_reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
    });
});

mocha.run();
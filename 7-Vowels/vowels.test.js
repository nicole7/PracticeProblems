mocha.set("bdd");
const { assert } = chai;

describe("countVowels", () => {
    it("returns the number of vowels in a string", () => {
        assert.equal(countVowels1("hello"), 2);
        assert.equal(countVowels2("hello"), 2)
    });
    it("returns 0 if there are not vowels", () => {
        assert.equal(countVowels1("my", 0));
        assert.equal(countVowels2("my", 0));
    });
});

mocha.run();
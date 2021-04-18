mocha.setup("bdd");
const { assert } = chai;

describe("An anagram", () => {
    it("returns true if two strings are anagrams", () => {
        assert.equal(isAnagram("Hello World", "hello world"), true);
        assert.equal(isSortedString("Hello World", "hello world"), true);
    });
    it("returns false if two strings are not anagrams", () => {
        assert.equal(isAnagram("Hello", "Hwllo"), false);
        assert.equal(isSortedString("Hello", "Hwllo"), false);
    });
});

mocha.run();
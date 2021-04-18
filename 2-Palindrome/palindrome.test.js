mocha.setup("bdd");
const { assert } = chai;

describe("A palindrome", () => {
    it("returns true if the same forward as it is backward", () => {
        assert.equal(isPalindrome1("abba abba"), true);
        assert.equal(isPalindrome3("abba bbb abba"), true);
    });
    it("returns false if it is not the same forwards and backwards", () => {
        assert.equal(isPalindrome1("car"), false);
        assert.equal(isPalindrome2("car"), false);
    });
});

mocha.run();



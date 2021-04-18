mocha.setup("bdd");
const { assert } = chai;

describe("Function that takes in a string and a number", () => {
    it("should return the string with each letter shifted up from that given number", () => {
        assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
        assert.equal(_caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
    });
    it("should return the string with each letter shifted down from that given number", () => {
        assert.equal(caesarCipher("I love JavaScript!", -100), "E hkra FwrwOynelp!");
        //assert.equal(_caesarCipher("I love JavaScript!", -100), "E hkra FwrwOynelp!");
    });
});
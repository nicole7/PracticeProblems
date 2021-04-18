mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
    it("should reverse a string", () => {
        assert.equal(reverssString("Hello World!"), "!dlroW olleH");
        assert.equal(reverseString2("Hello World!"), "!dlroW olleH");
        assert.equal(reverseString3("Hellow World!", "!dlroW olleH"));
    });
});

mocha.run();
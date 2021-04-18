mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
    it("Should return max character", () => {
        assert.equal(maxCharacter("Hello World"), "l")
    });
});

mocha.run();
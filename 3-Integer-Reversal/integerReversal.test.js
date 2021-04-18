mocha.setup("bdd")
const { assert } = chai;

describe("reverseInteger"), () => {
    it("Reverses a positive integer", () => {
        assert.equal(reverseInteger(436), 634);
    });
    it("Reverses a negative integer", () => {
        assert.equal(reverseInteger(-436), -634);
    });
};

mocha.run();
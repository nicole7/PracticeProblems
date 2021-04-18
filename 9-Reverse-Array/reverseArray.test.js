mocha.setup("bdd");
const { assert } = chai;

describe("reverseArray", () => {
    it("returns a revered array"), () => {
        assert.deepEqual(reverseArray([1, 2, 3, 4], [4, 3, 2, 1]));
        assert.deepEqual(_reversseArray([1, 2, 3, 4], [4, 3, 2, 1]));
    };
});

mocha.run();
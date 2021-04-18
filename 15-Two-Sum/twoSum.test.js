mocha.setup("bdd");
const { assert } = chai;

describe("The Function takes an array and sum", () => {
    it("should return the pairs that add up to the sum from the array", () => {
        assert.deepEqual(twoSum(([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]));
    });
});

mocha.run();
mocha.set("bdd");
const { assert } = chai;

describe("Bubble Sort", () => {
    it("should sort the array", () => {
        assert.equal(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.equal(_bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    })
})
mocha.setup("bdd");
const { assert } = chai;

describe("Chunking function", () => {
    it("returns a chunked array based on size", () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(_chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], 5]);
    });
});

mocha.run();
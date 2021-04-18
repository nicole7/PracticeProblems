mocha.setup("bdd");
const { assert } = chai;

describe("Function takes in an array of integers and", () => {
    const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
    const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);

    it("returns the mean", () => {
        assert.equal(Stats.round(stat1.mean()), 3.43);
        assert.equal(Stats.round(stat2.mean()), 2.5);
    });
    it("returns the median", () => {
        assert.equal(Stats.round(stat1.median()), 4);
        assert.equal(Stats.round(stat2.median()), 2.5);
    });
    it("returns the mode", () => {
        assert.equal(Stats.round(stat1.mode()), [4, 5]);
        assert.equal(Stats.round(stat2.mode()), []);
    });
});
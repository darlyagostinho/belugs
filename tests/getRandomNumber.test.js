import getRandomNumber from "./../src/lib/getRandomNumber.js";
const expect = require("chai").expect;

describe("getRandomNumber", function () {
    it("should return below 1", function () {
        let x = 10;
        while (--x) {
            let nSorted = getRandomNumber(0, 1);
            expect(nSorted).to.be.below(2);
        }
    });

    it("should return above 0", function () {
        let x = 10;
        while (--x) {
            let nSorted = getRandomNumber(0, 1);
            expect(nSorted).to.be.above(-1);
        }
    });

    it("should return above 0 when pass false as third parameter", function () {
        let x = 10;
        while (--x) {
            let nSorted = getRandomNumber(0, 1, false);
            expect(nSorted).to.be.above(-1);
        }
    });
});

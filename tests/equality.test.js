var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../equality')

describe('equality', () => {
    describe('strictEqual', () => {
        it('return true if two values are same value and type', () => {
            var sameSame1 = 5;
            var sameSame2 = 5;
            var testSame = strictEqual(sameSame1, sameSame2);
            expect(testSame).to.be.true;
        })
        it('return false if two values are different value but same type', () => {
            var diffSame1 = 1;
            var diffSame2 = 2;
            var testNumDiff = strictEqual(diffSame1, diffSame2);
            expect(testNumDiff).to.be.false;
        })
        it('return false if two values are same value but different types', () => {
            var sameDiff1 = 5;
            var sameDiff2 = '5';
            var testTypeDiff = strictEqual (sameDiff1, sameDiff2);
            expect(testTypeDiff).to.be.false;
        })
        it('return false if two values are different value and types', () => {
            var diffDiff1 = 1;
            var diffDiff2 = '2';
            var testTotalDiff = strictEqual (diffDiff1,diffDiff2);
            expect(testTotalDiff).to.be.false;
        })
    })
})
var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../equality')

describe('equality', () => {
    describe('strictEqual', () => {
        it('return true if two values are same value and type', () => {
            var sameSame = (5,5);
            var testSame = strictEqual(sameSame);
            expect(testSame).to.be.true;
        })
        it('return false if two values are different value but same type', () => {
            var diffSame = (1,2);
            var testNumDiff = strictEqual(diffSame);
            expect(testNumDiff).to.be.false;
        })
        it('return false if two values are same value but different types', () => {
            var sameDiff = (5,'5');
            var testTypeDiff = strictEqual (sameDiff);
            expect(testTypeDiff).to.be.false;
        })
        it('return false if two values are different value and types', () => {
            var diffDiff = (1,'2');
            var testTotalDiff = strictEqual (diffDiff);
            expect(testTotalDiff).to.be.false;
        })
    })
})
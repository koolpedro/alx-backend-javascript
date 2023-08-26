const { expect } = require('chai');

describe('Sample Test Suite', () => {
    it('should pass a passing test', () => {
        expect(true).to.be.true;
    });

    it.skip('should skip a failing test', () => {
        expect(false).to.be.true; // Failing assertion
    });

    it('should pass another passing test', () => {
        expect(2 + 2).to.equal(4);
    });
});


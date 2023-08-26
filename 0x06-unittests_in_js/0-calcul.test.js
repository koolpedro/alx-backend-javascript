const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should calculate the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.5, 2.7), 5);
        assert.strictEqual(calculateNumber(2.3, 3.8), 6);
	assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

     it('should calculate the sum of rounded positive numbers', () => {
        assert.strictEqual(calculateNumber(1.5, 2.7), 5);
        assert.strictEqual(calculateNumber(2.3, 3.8), 6);
    });

    it('should calculate the sum of rounded negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.5, -2.7), -4);
        assert.strictEqual(calculateNumber(-2.3, -3.8), -6);
    });
    it('should round and calculate when one of the numbers is zero', () => {
        assert.strictEqual(calculateNumber(0, 3.8), 4);
        assert.strictEqual(calculateNumber(2.3, 0), 2);
    });

    it('should round and calculate when both numbers are zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should round and calculate with decimal numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
        assert.strictEqual(calculateNumber(2.9, 3.1), 6);
    });	
});

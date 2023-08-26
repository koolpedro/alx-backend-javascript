const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should calculate the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 2.7), 5);
        assert.strictEqual(calculateNumber('SUM', 2.3, 3.8), 6);
    });

    it('should calculate the difference of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.5), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 1.8), 1);
    });

    it('should handle division by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 8.5, 0), 'Error');
    });

    it('should throw an error for invalid operation types', () => {
        assert.throws(() => calculateNumber('INVALID', 2, 3), Error);
    });
});

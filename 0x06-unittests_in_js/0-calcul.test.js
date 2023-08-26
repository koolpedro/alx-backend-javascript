const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should calculate the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.5, 2.7), 5);
        assert.strictEqual(calculateNumber(2.3, 3.8), 6);
	assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});

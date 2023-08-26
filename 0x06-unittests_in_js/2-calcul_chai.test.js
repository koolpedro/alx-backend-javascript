const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai'); // Adjust the path accordingly

describe('calculateNumber', () => {
    it('should calculate the sum of rounded numbers', () => {
        expect(calculateNumber('SUM', 1.5, 2.7)).to.equal(5);
        expect(calculateNumber('SUM', 2.3, 3.8)).to.equal(6);
    });

    it('should calculate the difference of rounded numbers', () => {
        expect(calculateNumber('SUBTRACT', 5.7, 2.5)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 3.2, 1.8)).to.equal(1);
    });

    it('should handle division by zero', () => {
        expect(calculateNumber('DIVIDE', 8.5, 0)).to.equal('Error');
    });

    it('should throw an error for invalid operation types', () => {
        expect(() => calculateNumber('INVALID', 2, 3)).to.throw(Error);
    });
});

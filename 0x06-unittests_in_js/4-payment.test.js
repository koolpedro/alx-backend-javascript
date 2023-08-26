const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment'); // Adjust the path accordingly

describe('sendPaymentRequestToApi', () => {
    it('should call calculateNumber with correct arguments and log message', () => {
        // Create a stub for Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        const consoleLogSpy = sinon.spy(console, 'log'); // Spy on console.log

        sendPaymentRequestToApi(100, 20);

        // Verify the stub and spy behavior
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        // Restore the stub and spy after testing
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});

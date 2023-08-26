const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call calculateNumber with correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore(); // Restore the original function after testing
    });
});

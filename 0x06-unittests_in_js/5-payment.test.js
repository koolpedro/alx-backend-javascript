const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./5-payment'); // Adjust the path accordingly

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log correct total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
    });
});

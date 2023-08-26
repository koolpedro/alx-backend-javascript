const request = require('request');
const { expect } = require('chai');

describe('API Integration Test', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return status code 200 and correct message for /cart/:id', (done) => {
        request.get(`${baseUrl}/cart/12`, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 for /cart/:id with non-numeric id', (done) => {
        request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});


const request = require('request');
const { expect } = require('chai');

describe('API Integration Test', () => {
   const baseUrl = 'http://localhost:7865';

   it('should return status code 200 and correct message', () => {
       return new Promise((resolve, reject) => {
           request.get(baseUrl, (error, response, body) => {
               if (error) {
                   reject(error);
               } else {
                   expect(response.statusCode).to.equal(200);
                   expect(body).to.equal('Welcome to the payment system');
                   resolve();
               }
           });
       });
   });
});

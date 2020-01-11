const request = require('supertest');
const app = require('../server/app');


describe('Test the root path', () => {
    test('It should get a response with GET / method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


//this test fully interacts with my actual database, so I'm receiving full and proper data
//requires having data in database for my config to pass
describe('Test the GET /listings/:id route', () => {
    test('It should retrieve a data object with an id that is a number', (done) => {
        request(app).get('/listings/1').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Response object', () => {
    test('It should not be empty', (done) => {
        request(app).get('/listings/543').then((response) => {
            expect(response).toHaveProperty('body');
            done();
        })
    })
    test('Response body should have 15 properties', (done) => {
        request(app).get('/listings/54343').then((response) => {
            expect(Object.keys(response.body).length).toBe(15);
            done();
        })
    });
    test('Body object should have matching id - listingId', (done) => {
        request(app).get('/listings/987654').then((response) => {
            expect(response.body.listingId).toBe(987654);
            done();
        })
    });
});
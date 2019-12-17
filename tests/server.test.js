const request = require('supertest');
const app = require('../server/index.js');

describe('Test the route path', () => {
    test('it should respond with status code 200 for a valid request', () => {
        // const id = Math.floor(Math.random() * 100) + 1;
        return request(app)
            .get('/listings/1')
            .then((response) => {
                expect(response.statusCode).toBe(200);
        });
    });

    test('it should respond with status code 404 for a bad request', () => {
        return request(app)
            .get('/listings')
            .then(response => {
                expect(response.statusCode).toBe(404);
        });
    });
});


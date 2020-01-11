const app = require('../server');
const request = require('supertest');
const mongoose = require('mongoose');
const db = require('../database/index');
const info = { id: 1, isSuperHost: true };
const update = { id: 1, isSuperHost: false };
require('babel-polyfill');


describe('Routes', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if(err) {
                console.log(err);
                process.exit(1);
            }
        });
    });


    it('should retrieve a user that exists in the DB', async () => {
        const user = new db(info);
        const saved = await user.save();
        expect(saved._id).toBeDefined();
        expect(saved.id).toBe(1);
    })

    xit('should get a specific document based on id', async () => {
        // const res = await request(app)
        //     .get('/listing/1')
        //     .catch(err => console.log(err))
        // expect(res.statusCode).toEqual(200);
        // expect(res.body.id).toBe(1);
    })
});

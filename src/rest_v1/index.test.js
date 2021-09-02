require('dotenv/config');
const request = require('supertest');
const mongoose = require('mongoose');
const { v4 } = require('uuid');
const { createApp } = require('../utils/createApp');


describe('Our server', () => {
  var app;

  // Called once before any of the tests in this block begin.
  beforeAll((done) => {
    app = createApp();
    mongoose.connect(process.env.MONGODB_ADDRESS).then(() => {
      app.listen((err) => {
        if (err) { return done(err); }
        done();
      });
    }).catch((error) => {
      done(error);
    });

  }, 6000);

  it('should work hello world endpoint', (done) => {
    request(app)
      .get('/')
      .expect(200, function (err, _) {
        if (err) { return done(err); }
        // Done
        done();
      });
  });

  it('should work GET cakes endpoint', (done) => {
    request(app)
      .get('/api/v1/cakes')
      .expect(200, function (err) {
        if (err) { return done(err); }
        done();
      });
  });

  it('should work POST cakes endpoint', (done) => {
    request(app)
      .post('/api/v1/cakes')
      .set('Content-type', 'application/json')
      .send({
        name: `test cake ${v4()}`,
        price: 12,
        flavors: ['chocolate']
      })
      .expect(201, function (err, _) {
        if (err) { return done(err); }
        // Done
        done();
      });
  });

  it('should work GET cakes/:id endpoint', (done) => {
    const test_id = '61311fcf83426061a3063e1d';
    request(app)
      .get(`/api/v1/cakes/${test_id}`)
      .expect(200, function (err, _) {
        if (err) { return done(err); }
        // Done
        done();
      });
  });

  it('should work PUT cakes/:id endpoint', (done) => {
    const test_id = '61311fba66125e5ae32b051d';
    request(app)
      .put(`/api/v1/cakes/${test_id}`)
      .set('Content-type', 'application/json')
      .send({
        name: `test cake ${v4()}`,
        price: (Math.random() * (100 - 1) + 1),
        flavors: ['chocolate']
      })
      .expect(200, function (err, res) {
        if (err) { return done(err); }
        // Done
        done();
      });
  });

});
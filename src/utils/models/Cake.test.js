const expect = require('chai').expect;
const mongoose = require('mongoose');
const constants = require('../constants');
const { connect } = require('../connection');

describe('Cake Model', () => {
    const Cake;

    beforeEach((done) => {
        connect();
        mongoose.connection.once('connected', () => {
            mongoose.connection.db.dropDatabase();
            require('./Cake').registerModels();
            Cake = mongoose.model('cake');
            done();
        });
    });

    afterEach((done) => {
        mongoose.disconnect();
        done();
    });

    describe('Lifecycle', () => {

        it('should not save without name', (done) => {
            const cake = new Cake({
                price: 12,
                flavors: ['chocolate']
            });
            cake.save((err) => {
                expect(err).to.exist
                    .and.be.instanceof(Error)
                    .and.have.property('message', constants.MISSING_NAME_MESSAGE);
                done();
            });
        });

        it('should not save without price', (done) => {
            const cake = new Cake({
                name: 'test cake',
                flavors: ['chocolate']
            });
            cake.save((err) => {
                expect(err).to.exist
                    .and.be.instanceof(Error)
                    .and.have.property('message', constants.MISSING_PRICE_MESSAGE);
                done();
            });
        });

        it('should not save without flavors', (done) => {
            const cake = new Cake({
                price: 12,
                name: 'test cake',
            });
            cake.save((err) => {
                expect(err).to.exist
                    .and.be.instanceof(Error)
                    .and.have.property('message', constants.MISSING_FLAVORS_MESSAGE);
                done();
            });
        });

    });

});
require('dotenv/config');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const { v4 } = require('uuid');
const constants = require('../constants');
const { cakeSchema } = require('./Cake');

describe('Cake Model', () => {
    let Cake;

    beforeAll((done) => {
        mongoose.connect(process.env.MONGODB_ADDRESS).then(() => {
            Cake = mongoose.model('cake', cakeSchema);
            done();
        }).catch((error) => {
            console.log(error);
            done();
        });
    }, 60000);

    afterAll((done) => {
        mongoose.disconnect();
        done();
    });

    describe('Validations', () => {
        it('should not save without name', (done) => {
            const cake = new Cake({
                price: 12,
                flavors: ['chocolate']
            });
            cake.save((err) => {
                expect(err).to.exist
                    .and.be.instanceof(Error)
                    .and.have.property('message', `cake validation failed: name: ${constants.MISSING_NAME_MESSAGE}`);
                done();
            });
        }, 60000);

        it('should not save without price', (done) => {
            const cake = new Cake({
                name: `test cake ${v4()}`,
                flavors: ['chocolate']
            });
            cake.save((err) => {
                expect(err).to.exist
                    .and.be.instanceof(Error)
                    .and.have.property('message', `cake validation failed: price: ${constants.MISSING_PRICE_MESSAGE}`);
                done();
            });
        }, 60000);
    });

});
const mongoose = require('mongoose');
const { Schema } = mongoose;
const constants = require('../constants');

const cakeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: constants.MISSING_NAME_MESSAGE
    },
    price: {
        type: Number,
        required: constants.MISSING_PRICE_MESSAGE
    },
    flavors: [{ type: String, required: constants.MISSING_FLAVORS_MESSAGE }]
});

exports.Cake = mongoose.model('cake', cakeSchema);

exports.cakeSchema = cakeSchema;
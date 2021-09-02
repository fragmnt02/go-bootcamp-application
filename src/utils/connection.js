require('dotenv/config');
const mongoose = require('mongoose');

exports.connect = () => {
    return mongoose.connect(process.env.MONGODB_ADDRESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
}


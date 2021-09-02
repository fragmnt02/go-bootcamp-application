const express = require('express');
const v1Router = require('../rest_v1/index');

exports.createApp = () => {

    const app = express();

    app.use(express.json());

    app.use('/api/v1', v1Router);

    app.get('/', (_, res) => {
        res.status(200).send('Hello, World. Made by Francisco Rafael Arce García');
    });

    return app;
}
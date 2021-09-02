require('dotenv/config');
const express = require('express');
const { connect } = require('./src/utils/connection');
const v1Router = require('./src/rest_v1/index');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api/v1', v1Router);

app.get('/', (_, res) => {
    res.status(200).send('Hello, World. Made by Francisco Rafael Arce García');
});

connect().then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}).catch(err => {
    console.error(err);
})
require('dotenv/config');
const { connect } = require('./src/utils/connection');
const { createApp } = require('./src/utils/createApp');

connect().then(() => {
    const PORT = process.env.PORT || 3000;
    const app = createApp();
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}).catch(err => {
    console.error(err);
})
const router = require('express').Router();
const cakesRouter = require('./cakes/router');

router.use('/cakes', cakesRouter);

// /api/v1/
router.get('/', (req, res) => {
    res.status(200).send('Made by Francisco Rafael Arce García go to /actions');
});

module.exports = router;
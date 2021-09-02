const express = require('express');
const router = express.Router();
const { getAllCakes, createACake, getACake, updateACake, deleteACake } = require('./controllers');
/*
    GET cakes
    GET cakes/:id
    POST cakes
    PUT cakes/:id
    DELETE cakes/:id
*/

// /api/v1/cakes
router.route('/')
    .get(getAllCakes)
    .post(createACake);

// /api/v1/cakes/:id
router.route('/:id')
    .get(getACake)
    .put(updateACake)
    .delete(deleteACake);

module.exports = router;
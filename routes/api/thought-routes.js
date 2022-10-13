const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:id')
    .get(getThoughtById);

router
    .route('/:userId')
    .post(createThought);

module.exports = router;
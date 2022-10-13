const router = require('express').Router();
const {
    getAllUsers,
    getUserById
} = require('../../controllers/user-controllers');

router
    .route('/')
    .get(getAllUsers);

router
    .route('/:id')
    .get(getUserById);


module.exports = router;
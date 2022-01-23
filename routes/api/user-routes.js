const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/pizzas
router
    .route('/')
    .get(getAllUser)
    .post(createUser);
// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/pizzas/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
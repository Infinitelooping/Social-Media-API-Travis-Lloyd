const router = require('express').Router();
const {
    addThought,
    deleteThought,
    addReaction,
    removeReaction,
    getAllThought,
    getThoughtById,
    updateThought,

} = require('../../controllers/thought-controller');

// // /api/thoughts/<userId>
// router.route('/:userId').post(addThought);

// // /api/thoughts/<userId>/<thoughtId>
// router
//     .route('/:userId/:thoughtId')
//     .put(addReaction)
//     .delete(removeThought)

// router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

router.route('/').get(getAllThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:userId').post(addThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
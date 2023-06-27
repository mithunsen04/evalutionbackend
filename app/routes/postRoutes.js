

const express = require('express');
const postController = require('../controllers/postController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateUser, postController.createPost);
router.get('/', authenticateUser, postController.getPosts);
router.put('/:postId', authenticateUser, postController.updatePost);
router.delete('/:postId', authenticateUser, postController.deletePost);

module.exports = router;

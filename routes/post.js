const express = require('express');
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
} = require('../controllers/post');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

//------------ CRUD operation API'S-------------//

// Reading Post method
router.get('/', verifyToken, getPost);

// Creating  post method
router.post('/', verifyToken,createPost);

// Updating  post method
router.put('/:id', verifyToken, updatePost);

// Deleting post method
router.delete('/:id', verifyToken, deletePost);

//------------- Like & Dislike API'S -----------//
router.put('/:id/like', verifyToken, likePost);

//------------- Commenting the post API ----------//
router.put('/:id/comment', verifyToken, commentPost);

module.exports = router;
